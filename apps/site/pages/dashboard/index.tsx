import { Container, MainLayout } from '@msdit/shared/ui'
import DashboardTemplate from 'apps/site/templates/DashboardTemplate'
import withAuth from 'apps/site/templates/withAuth/withAuth'
import { NextPage } from 'next'

const Dashboard: NextPage = () => {
    return (
        <MainLayout>
            <Container className="flex-1 my-4">
                <DashboardTemplate />
            </Container>
        </MainLayout>
    )
}

export default withAuth(Dashboard, 'DASHBOARD')
