export const changeTheme = (theme:string) => {
    window.document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
}