import ajax from './ajax'
export const reqHomeData = () => ajax('/home')
export const reqCategories = () => ajax('/categorylist')
export const reqTopicTabs = () => ajax('/topicapi/getTabs.json')
export const reqRecommendTopic = () => ajax('/topicapi/recManual.json')

export const reqAutoTopic = (page,size=5) => ajax({
  method:'get',
  url: '/topicapi/recAuto.json',
  params: {
    page,
    size
  }
})
export const reqSearchKeyword  = () => ajax('/search/init.json')
export const autoComplete = (keywordPrefix) => ajax({
  method: 'get',
  url:'/searchapi/searchAutoComplete.json',
  params:{keywordPrefix}
})
