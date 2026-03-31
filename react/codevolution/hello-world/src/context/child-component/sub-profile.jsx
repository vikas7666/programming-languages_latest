import { NestedSubProfile } from './nested-sub-profile'
// export const SubProfile = ({ name, children }) => {
export const SubProfile = () => {
    return (
        <div>
            {/* <h2>SubChild Compoent loaded {children}</h2>
            <p>Here Name we pass as props :{name}</p> */}
            {/* <NestedSubProfile useranme={name}>Here Name we pass as props :{name}</NestedSubProfile> */}
            <NestedSubProfile>Here Name we pass as props :</NestedSubProfile>
        </div>
    )
}