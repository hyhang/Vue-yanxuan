import ajax from './ajax'
export const reqHomeData = () => ajax('/home')
export const reqCategories = () => ajax('/categorylist')
export const reqTopicTabs = () => ajax('/api/getTabs.json')
export const reqRecommendTopic = () => ajax('/api/recManual.json')