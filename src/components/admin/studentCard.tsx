import styled from "styled-components";
import { Gray } from "../../style/color";
import { Basic } from "../../style/color";

type studentPropsType = {
    data: string;
}

const StudentCard = ({data}:studentPropsType) => {
    return(
        <StudentContainer>
            <ProfileImg src="https://i.guim.co.uk/img/media/e3d9827f235ac40064f15d7df25024aec60500cb/0_134_5616_3370/master/5616.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=56f9da8e992f2558c4709614daf82a69" />
            <Vcontainer>
                <p>최양성명</p>
                <p>8학년 8반 88번</p>
            </Vcontainer>
        </StudentContainer>
    )
}

export default StudentCard;

const StudentContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 8px;
    gap: 8px;
    border: 1px ${Gray[10]} solid;
    border-radius: 8px;
    background-color: ${Basic.white};
`;

const ProfileImg = styled.img`
    width: 42px;
    height: 42px;
    border-radius: 9888px;
`

const Vcontainer = styled.div`
    display: flex;
    flex-direction: column;
`