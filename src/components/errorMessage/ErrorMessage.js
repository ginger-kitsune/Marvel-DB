const ErrorMessage = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <svg viewBox="0 0 100 100" y="0" x="0" xmlns="http://www.w3.org/2000/svg" style={{margin:'0 auto',background:'none',display:'block'}} width="200px" height="200px">
                <g>
                    <g>
                        <g>
                            <g>
                                <path fill="#f4e6c8" d="M50.5 25.1c-.2-.4-.8-.4-1 0L18.2 74.3c-.1.2-.1.5.1.7l.1.2h62.8c.1 0 .4 0 .5-.3.2-.3 0-.6 0-.6L50.5 25.1z"></path>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#c33837" d="M57.2 20.6c-1.6-2.4-4.3-3.9-7.2-3.9-2.9 0-5.6 1.4-7.3 3.9L11.5 69.7c-1.8 2.7-2 6.1-.5 9 1.5 2.9 4.5 4.6 7.7 4.6h62.5c3.2 0 6.2-1.8 7.7-4.6 1.5-2.9 1.4-6.3-.4-9L57.2 20.6zm24.6 54.2c-.2.3-.4.3-.5.3H18.5l-.2-.1c-.2-.2-.2-.4-.1-.7l31.3-49.2c.3-.4.8-.4 1 0l31.3 49.1c0 .1.2.3 0 .6z"></path>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M61.9 52L57 47.1l-7 7-7-7-4.9 4.9 7 7-7 7 4.9 4.9 7-7 7 7 4.9-4.9-7-7z" fill="#e15c64">
                                </path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
            <span>Something went wrong</span>
        </div>
    )
}

export default ErrorMessage;