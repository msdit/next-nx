import { MainLayout } from '@msdit/shared/ui'
import LoginTemplate from 'apps/site/templates/LoginTemplate'
import withAuth from 'apps/site/templates/withAuth/withAuth'
import { NextPage } from 'next'

const Login: NextPage = () => {
    return (
        <MainLayout>
            <div className="flex-1 flex justify-center items-center">
                <LoginTemplate />
            </div>
        </MainLayout>
    )
}

export default withAuth(Login, 'LOGIN')
