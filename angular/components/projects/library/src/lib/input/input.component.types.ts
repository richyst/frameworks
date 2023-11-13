export interface InputProps extends HTMLInputElement {
  id: string
  name: string
  label: string
  ttest: ValidityState
  value?: string
  onChange?: (e: ChangeEventHandler<HTMLInputElement>) => void
  type?: Exclude<HTMLInputElement['type'], 'number'>
  errorMessages?: {
    [key in keyof ValidityState]?: string
  }
}
