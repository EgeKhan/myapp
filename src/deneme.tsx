interface ButonComponentProps{
    buttonText?: any;
}

const ButonComponent: React.FC<ButonComponentProps> = ({buttonText}) => {



    return ( 
    <>
        <button>{buttonText}</button>
    </>   
    );
};
export default ButonComponent;
