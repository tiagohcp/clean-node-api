import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .get('/api/signup')
      .send({
        name: 'Tiago',
        email: 'tiagohcp@gmail.com',
        password: '123',
        password_confirmation: '123'
      })
      .expect(200)
  })
})
