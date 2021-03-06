import AUTH_SESSION_TABLE from './auth-session'
import TOKEN_TABLE from './token'
import USER_AUTH_TABLE from './user-auth'
import USER_TABLE from './user'
import MESSAGE_TABLE from './message'

// sort by dependencies
export default [TOKEN_TABLE, USER_TABLE, USER_AUTH_TABLE, AUTH_SESSION_TABLE, MESSAGE_TABLE]
