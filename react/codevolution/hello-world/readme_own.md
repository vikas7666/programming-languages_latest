
----------- component import and export 
👉 Rule 1: Curly Braces = Exact Name

export const Button = () => {}
mport { Button } from './Button'

Rule 2: No Curly Braces = You Can Rename It

export default Button
import MyButton from './Button'
import Banana from './Button'

👉 Use default export for components
👉 Use named export for utilities/helpers

// here having {} braces means excat name
export const add = () => {}
export const subtract = () => {}

import { add, subtract } from './Math'

----------- component import and export 