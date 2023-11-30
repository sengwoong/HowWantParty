import { useQuery ,useMutation} from '@tanstack/react-query';
import axios from 'axios';

/**
 * GPT 채팅 기능을 처리하는 커스텀 훅입니다.
 * 데이터 가져오기 및 관리를 위해 react-query를 사용합니다.
 * 60초마다 재검색 간격 설정 (60 * 1000 밀리초)
 * @returns {Object} gptQuery 및 PostProducts 함수를 포함한 객체입니다.
 */
export default function useGptChat() {
  
  /**
   * 서버에서 제품을 가져옵니다.
   * 
   * @returns {Promise} 가져온 데이터로 해결되는 프로미스입니다.
   * @throws {Error} 요청이 실패하거나 응답 상태가 200이 아닌 경우 발생합니다.
   */
  const FetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8003/chat/alladmin/');

      if (response.status !== 200) {
        throw new Error('제품을 가져오는 데 실패했습니다');
      }

      const data = response.data;
      console.log("data useGptChat", data);

      return data;
    } catch (error) {
      console.error('제품을 가져오는 중 오류 발생:', error);
      throw error;
    }
  };

  /**
   * 서버에 제품을 전송합니다.
   * 
   * @param {Object} params - 포스트 요청의 url입니다.
   * @param {string} params.id - 포스트 요청의 ID입니다.
   * @param {string} params.Prompt - 포스트 요청의 프롬프트입니다.
   * @param {string} params.Response - 포스트 요청의 응답입니다.
   * 
   * @returns {Promise} 포스트 요청의 데이터로 해결되는 프로미스입니다.
   * @throws {Error} 포스트 요청이 실패한 경우 발생합니다.
   */
  const PostProducts = async ({ id, Prompt, Response }) => {
    try {
      const response = await axios.put(`http://127.0.0.1:8003/chat/alladmin/${id}/`, {
        'prompt': Prompt,
        'response': Response,
      });
  
 
      
      console.log(id, Prompt, Response)
      const data = response.data;
      console.log("PostProducts", data);

      return data;
    } catch (error) {
      if (error.response) {
        // 서버가 응답을 반환한 경우
        console.error('Server responded with:', error.response.data);
        console.error('Status code:', error.response.status);
        console.error('Headers:', error.response.headers);
      } else {
        // 서버에 요청을 보내기 전에 오류가 발생한 경우
        console.error('Error message:', error.message);
      }
      


      console.error('제품 전송 중 오류 발생:', error);
      throw error;
    }
  };

  const { mutate: mutatePostProducts } = useMutation({
    mutationFn: PostProducts,
    onSuccess: () => {
      // Handle success
      refetch();
    },
  });
  


 
  const  { data: gptData, error: gptError, refetch } = useQuery({
    queryKey: ['GptRool'],
    queryFn: FetchProducts,
    refetchInterval: 60 * 2000, //
  });

  return { gptData, mutatePostProducts };
}


  // function Example() {
  //   const { isPending, error, data } = useQuery({
  //     queryKey: ['repoData'],
  //     queryFn: () =>
  //       fetch('https://api.github.com/repos/TanStack/query').then(
  //         (res) => res.json(),
  //       ),
  //   })
  

  



// /**
//  * GPT 채팅 기능을 처리하는 커스텀 훅입니다.
//  * 데이터 가져오기 및 관리를 위해 react-query를 사용합니다.
//  * 60초마다 재검색 간격 설정 (60 * 1000 밀리초)
//  * @returns {Object} query 객체와 mutation 함수를 포함한 객체입니다.
//  */
// export default function useGptChat() {
  
//   // 서버에서 제품을 가져오는 함수
//   const FetchProducts = async () => {
//     const response = await axios.get('http://localhost:8003/chat/alladmin/');

//     if (response.status !== 200) {
//       throw new Error('제품을 가져오는 데 실패했습니다');
//     }

//     const data = response.data;
//     console.log("data useGptChat", data);

//     return data;
//   };

//   // 서버에 제품을 전송하는 함수
//   const PostProducts = async ({ id, Prompt, Response }) => {
//     const response = await axios.put(`http://127.0.0.1:8003/chat/alladmin/${id}/`, {
//       'prompt': Prompt,
//       'response': Response,
//     });

//     const data = response.data;
//     console.log("PostProducts", data);

//     return data;
//   };

//   // useQuery로 데이터 가져오기
//   const { data: gptData, error: gptError, refetch } = useQuery('GptRool', FetchProducts, {
//     refetchInterval: 60 * 2000,
//   });

//   // useMutation으로 데이터 업데이트하기
//   const { mutate: mutatePostProducts } = useMutation(PostProducts, {
//     onSuccess: () => {
//       // 성공적인 변경 후 데이터 다시 가져오기
//       refetch();
//     },
//   });

//   // 필요한 데이터 및 함수들을 반환
//   return { gptData, gptError, mutatePostProducts };
// }



