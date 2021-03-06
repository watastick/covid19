import dayjs from 'dayjs'
import { bodikApi } from '../services'
import { groupBy, reducer } from './util.js'
import { convertDateToSimpleFormat } from '@/utils/formatDate'

export const state = () => ({
  testedNumber: [],
  patients: [],
  nagasakiCityNews: [],
  attributes: [],
  patientsNotCruise: null,
  patientsGraphNotCruise: [],
  otherData: []
})

export const getters = {
  lastUpdate: state => {
    return state.testedNumber.length > 0
      ? dayjs(state.testedNumber[state.testedNumber.length - 1].年月日)
          .add(1, 'day')
          .format('YYYY/MM/DD')
      : '2020-04-27'
  },

  lastUpdate2: state => {
    return state.patients.length > 0
      ? dayjs(state.patients[state.patients.length - 1].公表_年月日)
          .add(1, 'day')
          .format('YYYY/MM/DD')
      : '2020-04-27'
  }
}

export const mutations = {
  // 長崎県新型コロナウイルス感染症検査実施数のロード完了後の処理
  setPrefectureTestedCases(state, data) {
    if (!data || data.length === 0) return
    state.testedNumber = data
  },

  // 感染症陽性患者発表情報のロード完了後の処理
  PrefectureConfirmedCases(state, data) {
    if (!data || data.length === 0) return
    state.patients = data
  },

  // 長崎市のニュースのロード完了後の処理
  setNagasakiCityNews(state, data) {
    if (!data) return

    state.nagasakiCityNews = data.map(item => {
      return {
        date: new Date(item.更新日),
        url: item.URL,
        no: item.No,
        text: item.件名
      }
    })
  },

  // 非同期データのロード後に呼ばれます。
  allDataUpdated(state, data) {
    const testedCases = data.testedCases
    const confirmedCases = data.confirmedCases
    const otherData = data.otherData
    if (!testedCases || !confirmedCases) return

    state.otherData = otherData

    // state.groups = groupBy(data, r => r.公表_年月日)
    const notCruise = confirmedCases
      .map(x => x)
      .filter(date => date.クルーズ船 !== '1')
    // console.log(notCruise, 'notCruise')

    // 属性データの作成
    state.attributes = notCruise.map(item => {
      return {
        リリース日: item.公表_年月日,
        居住地: item.居住地,
        年代: item.年代,
        性別: item.性別,
        date: item.公表_年月日
      }
    })

    const kensaDates = testedCases.map(x => x.年月日)
    const groupsNotCruise = groupBy(notCruise, r => r.公表_年月日)

    state.patientsGraphNotCruise = kensaDates.map(item => {
      return {
        日付: convertDateToSimpleFormat(item),
        小計: groupsNotCruise[item] ? groupsNotCruise[item].length : 0
      }
    })

    // 検査陽性者の状況のデータ作成
    const 退院者数 = otherData.filter(d => d.KEY === '県内_退院者数')
    const 死亡者数 = otherData.filter(d => d.KEY === '県内_死亡者数')

    // console.log(otherData, 'otherData')
    // console.log(死亡者数, '死亡者数')
    const taiin = 退院者数 ? Number(退院者数[0].VALUE) : 0
    const dead = 死亡者数 ? Number(死亡者数[0].VALUE) : 0
    // console.log(taiin, 'taiin')
    // グラフ表示用のデータ作成
    const formattedData = {
      検査実施人数: testedCases.map(x => Number(x.件数)).reduce(reducer),
      陽性者数: notCruise.length,
      入院中: confirmedCases.length - taiin,
      軽症中等症: 0,
      重症: 0,
      死亡: dead,
      退院: taiin
    }
    // console.log(formattedData, 'formattedData')

    state.patientsNotCruise = formattedData
  }
}

export const actions = {
  // NuxtのFetchでビルド時にデータ取得するときはこっちを使う
  async GET_BODIK_AXIOS({ commit }, $axios) {
    try {
      const res = await bodikApi.axiosNagasakiPrefectureTestedCases($axios)
      // console.log(res, 'res')
      if (res.result.records) commit('setBodicData1', res.result.records)

      const res2 = await bodikApi.axiosNagasakiPrefectureConfirmedCases($axios)
      // console.log(res2, 'res')
      if (res2.result.records) commit('setBodicData2', res2.result.records)

      const newsRes = await bodikApi.axiosNagasakiCityNews($axios)
      if (res.result.records)
        commit('setNagasakiCityNews', newsRes.result.records)
    } catch (e) {}
  },

  // ブラウザから非同期でBODIKからデータ取得するさいにはこちらを使う
  async GET_BODIK_JSONP({ commit }) {
    try {
      const result1 = await bodikApi.fetchNagasakiPrefectureTestedCases()
      // console.log(result1, 'fetchNagasakiPrefectureTestedCases')
      commit('setPrefectureTestedCases', result1.records)

      const result2 = await bodikApi.fetchNagasakiPrefectureConfirmedCases()
      commit('PrefectureConfirmedCases', result2.records)

      const news = await bodikApi.fetchNagasakiCityNews()
      commit('setNagasakiCityNews', news.records)

      const result3 = await bodikApi.fetchonyMouseId()

      /// / 非同期データのロード後処理
      commit('allDataUpdated', {
        testedCases: result1.records,
        confirmedCases: result2.records,
        otherData: result3.records
      })
    } catch (e) {}
  }
}
