interface ButonComponentProps{
    child?: any;
}

const DenemeComponent: React.FC<ButonComponentProps> = ({child}) => {



    return ( 
    <>
        <div>{child}</div>
    </>   
    );
};
export default DenemeComponent;
