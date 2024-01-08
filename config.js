import DefaultRole from './src/Jsons/DefaultRole.json'
import UsersWithOutRole from './src/Jsons/UsersWithOutRole.json'

const env = import.meta.env

export const config = {
    backend: {
      host: env.VITE_APP_HTTP_HOST,
      hostWs: env.VITE_APP_WS_HOST,
      portHttp: env.VITE_APP_HTTP_PORT,
      portWs: env.VITE_APP_HTTP_PORTWS
    },
    map: {
      center: JSON.parse(env.VITE_APP_LOCATION_MAP),
      zoom_general: env.VITE_APP_MAP_ZOOM_GENERAL,
      zoom_specific: env.VITE_APP_MAP_ZOOM_SPECIFIC,
      api_key: env.VITE_APP_GEOSEARCH_KEY
    },
    restore: {
      hash: 'o6PBmJwBGLO;t12'
    },
    defaultRole: DefaultRole,
    usersWithoutRole: UsersWithOutRole
}