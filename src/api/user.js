import request from '@/utils/request'

// export function login(data) {
//   return request({
//     url: '/user/login',
//     method: 'post',
//     data
//   })
// }

// export function getInfo(token) {
//   return request({
//       url: '/user/info',
//       method: 'get',
//       params: { token }
//   })
// }

// export function logout() {
//   return request({
//       url: '/user/logout',
//       method: 'post'
//   })
// }

// 重写登陆
export function login(data) {
    const tokens = {
        admin: {
            token: 'admin-token'
        },
        editor: {
            token: 'editor-token'
        }
    }
    return new Promise((resolve, reject) => {
        resolve({
            data: tokens[data.username]
        });
    })
}

// 重写获取info
export function getInfo(token) {
    const users = {
        'admin-token': {
            roles: ['admin'],
            introduction: 'I am a super administrator',
            avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            name: 'Super Admin'
        },
        'editor-token': {
            roles: ['editor'],
            introduction: 'I am an editor',
            avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            name: 'Normal Editor'
        }
    }
    return new Promise((resolve, reject) => {
        resolve({
            data: users[token]
        });
    })
}


// 重写退出登陆
export function logout(data) {
    return new Promise((resolve, reject) => {
        resolve();
    })
}