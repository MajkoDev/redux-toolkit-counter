# redux-toolkit-counter

[Edit on StackBlitz](https://stackblitz.com/edit/vitejs-vite-fgqgg4)




---

**Documentation to function 'displayThreeDigits()' in component 'CounterActions.jsx'**

In the updated function, after formatting the number using toFixed(3), we check if the number has any digits beyond the decimal point by using the modulo operator %. If the number is not an integer (num % 1 !== 0), we return the formatted number as is. Otherwise, we convert the formatted number to an integer using parseInt() to remove the decimal part and trailing zeros.
