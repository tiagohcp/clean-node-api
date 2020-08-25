import { Validation } from './validation'
import { InvalidParamError } from '../../errors'

export class CompareFieldsValidation implements Validation {
  private readonly fieldName: string
  private readonly fieldNameCompareName: string

  constructor (fieldName: string, fieldNameCompareName: string) {
    this.fieldName = fieldName
    this.fieldNameCompareName = fieldNameCompareName
  }

  validate (input: any): Error {
    if (input[this.fieldName] !== input[this.fieldNameCompareName]) {
      return new InvalidParamError(this.fieldNameCompareName)
    }
  }
}
