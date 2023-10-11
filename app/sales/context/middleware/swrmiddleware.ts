import { Middleware, SWRHook } from 'swr'

export const swrMiddleware: Middleware = (useSWRNext: SWRHook) => (key, fetcher, config) => {



  const swr = useSWRNext(key, fetcher, config)


  return swr
}