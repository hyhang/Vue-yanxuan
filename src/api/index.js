import ajax from './ajax'
export const reqHomeData = () => ajax('/home')
export const reqCategories = () => ajax('/categorylist')
export const reqTopicTabs = () => ajax('/topic/getTabs.json')
export const reqRecommendTopic = () => ajax('/topic/recManual.json')

export const reqAutoTopic = (page,size=5) => ajax({
  method:'get',
  url: '/topic/recAuto.json',
  params: {
    page,
    size
  }
})
export const reqSearchKeyword  = () => ajax('/search/init.json')
export const autoComplete = (keywordPrefix) => ajax({
  method: 'get',
  url:'/search/searchAutoComplete.json',
  params:{keywordPrefix}
})
