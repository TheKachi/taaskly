export const playSound = (url:any) => {
    const audio = new Audio(url)
    audio.play()
}

const beforeUnloadListener = (event:Event) => {
    event.preventDefault()
    // return event.returnValue = 'You are About to leave the room, automatic forfeit'
}

export const disableReload = () => {
    addEventListener('beforeunload', beforeUnloadListener, { capture: true })
}
export const enableReload = () => {
    removeEventListener('beforeunload', beforeUnloadListener, { capture: true })
}
