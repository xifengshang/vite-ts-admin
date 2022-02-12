import service from "@/assets/utils/request";

export const testData = () => {
  return service({
    url: '/api/test',
    method: 'GET'
  })
}