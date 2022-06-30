export interface AuthState {
    uid: string,
    email: string | null,
    isAuthentificated: boolean
}

export interface AuthContextInterface {
    auth: AuthState,
    setAuth: React.Dispatch<React.SetStateAction<AuthState>>
}