type Person = {
	id: string
	age: number
	name: string
}
type OmitStrict<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P] }

// type Pick<T, K extends keyof T> = {
// 	[P in K]: T[P]
// }
// type Exclude<T, U> = T extends U ? never : T

type OmitTyped<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type Person1 = OmitStrict<Person, 'age'>
type Person2 = OmitTyped<Person, 'age' | 'name'>
