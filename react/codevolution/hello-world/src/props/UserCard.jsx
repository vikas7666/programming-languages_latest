import { UserInfo } from './UserInfo'

export const UserCard = () => {
    return (
        <div>
            <h2>User Card Details</h2>
            <UserInfo name="vikas" age={30} city="Mumbai" email="vikas.shukla966@gmail.com" />
            <UserInfo name="ved" age={2} city="Mumbai" email="ved@gmail.com" />

        </div>
    )
}