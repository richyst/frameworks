import type { ChangeEventHandler, HTMLAttributes, HTMLInputTypeAttribute } from "svelte/elements"

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  id: string
  name: string
  label: string
  ttest: ValidityState
  value?: string
  onChange?: (e: ChangeEventHandler<HTMLInputElement>) => void
  type?: Exclude<HTMLInputTypeAttribute, 'number'>
  errorMessages?: {
    [key in keyof ValidityState]?: string
  }
}
