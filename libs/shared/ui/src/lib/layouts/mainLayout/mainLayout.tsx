import { ReactNode } from 'react'
import { FC } from 'react'
import { Container } from '@msdit/shared/ui'
import { useDispatch, useSelector } from 'react-redux'
import { RSP } from 'apps/site/redux/reducers'
import { IUserStateProps } from 'apps/site/redux/reducers/userReducer'
import { removeToken } from '@msdit/shared/utility'
import { updateUsername } from 'apps/site/redux/actions/userActions'

interface MainLayoutProps {
    hasHeader?: boolean
    hasFooter?: boolean
    children?: ReactNode
}

const MainLayout: FC<MainLayoutProps> = (props) => {
    const { hasHeader = true, hasFooter = true, children } = props
    const dispatch = useDispatch()
    const { username } = useSelector<RSP, IUserStateProps>(
        (state) => state.user
    )
    const handleLogout = () => {
        removeToken()
        dispatch(updateUsername(''))
    }
    return (
        <div className="flex flex-col w-full min-h-screen bg-neutral-50">
            {hasHeader && (
                <header className="w-full h-16 bg-primary-600">
                    <Container className="flex items-center text-white h-full justify-between">
                        <div>
                            <p className="text-xl font-bold md:hidden">UM</p>
                            <p className="text-xl font-bold hidden md:block">
                                User Management
                            </p>
                        </div>
                        {!!username && (
                            <div className="flex items-center">
                                <p className="text-sm mr-2">{username}</p>|
                                <p
                                    onClick={handleLogout}
                                    className="cursor-pointer text-sm p-2"
                                >
                                    Logout
                                </p>
                            </div>
                        )}
                    </Container>
                </header>
            )}
            {children}
            {hasFooter && (
                <footer>
                    <Container className="flex justify-center items-center text-white py-4">
                        <p className="text-sm text-center">
                            <span className="text-neutral-500">
                                developed by:{' '}
                            </span>
                            <a
                                href="https://www.linkedin.com/in/msdit148/"
                                target="_blank"
                                className="text-primary-400"
                            >
                                Masoud Aghaei
                            </a>
                        </p>
                    </Container>
                </footer>
            )}
        </div>
    )
}

export default MainLayout
