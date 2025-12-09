import PropsNew from './PropsNew';

function Props() {
    let name = "Menaka";
    let age = 18;
    return (
        <div>
        <PropsNew Message={name} age={age} />
        </div>
    )
}
export default Props;
