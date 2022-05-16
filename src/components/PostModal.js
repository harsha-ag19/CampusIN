import styled from 'styled-components';

const PostModal = (props) => {
 return <Container>
     <Content>
         <Header>
              <h2>
                  Create a post</h2>
                  <button>
                      <img src="" alt="delete-icon"/>
                  </button>
         </Header>
         <SharedContent>
         <UserInfo><img width="20%" height="20%"src="/images/user.png"/>
         <span>Name</span></UserInfo>
         </SharedContent>
         <SharedCreation>
             Action
         </SharedCreation>
         </Content>
 </Container>
};

const Container = styled.div`
position:fixed;
left:0;
right:0;
margin:0;
bottom:0;
z-index:9999;
color:black;
background-color: rgba(0,0,0,0.8);
`;

const Content = styled.div`
width:100%;
max-width:552px;
background-color:white;
max-height:90%;
overflow:initial;
border-radius:5px;
position:relative;
display:flex;
flex-direction:column;
top:32px;
margin:0 auto;
`;

const Header=styled.div`

display:block;
padding:16px 20px;
border-bottom:1px solid rgba(0,0,0,0,0.15);
font-size:16px;
line-height:1.5;
color:rgba(0,0,0,0.6);
font-weight:400;

display:flex;
justify-content:space-between;
align-items:center;
button
{
    height:40px;
    width:40px;
    min-width:auto;
    color:rgba(0,0,0,0.15);
    svg{
        pointer-events:none;
    }
}
`;

const SharedContent =styled.div`
  display:flex;
  flex-direction:column;
  flex-grow:1;
  overflow-y:auto ;
  vertical-align :baseline;
  background:transparent;

  padding:8px 12px;

`;

const UserInfo=styled.div`
display:flex;
align_item:center;
padding:12px 24px;

png ,img
{
    width:48px;
    height:48px;
    background-clip:content-box;
    border-radius:50%;
    border:2px solid transparent;
}


span
{
    font-weight:600;
    font-size:16px;
    line-height:1.5;
    margin-left:5px;
}
`;
const SharedCreation= styled.div
`
display:flex;
justify-content:space-between;
padding:12px 24px 12px 16px;





`;
export default PostModal;