import { Api } from '../Axios.config'

export class UserService {
  private http = Api.Http

  public async userPost(newRegister: any) {
    return await this.http
      .post('/registro', newRegister)
      .then((res) => res.data)
  }
  public async userDelete(deletUser: any) {
    return await this.http
      .delete('/registro/' + deletUser._id)
      .then((res) => res.data)
  }
  public async userPatch(UpdateUser: any) {
    return await this.http
      .put('/registro/' + UpdateUser._id, UpdateUser)
      .then((res) => res.data)
  }

  public async userGet() {
    return await this.http.get('/registro').then((res) => res.data)
  }
}

export const userService = new UserService()
