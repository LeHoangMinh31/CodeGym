let keyWord, keyAPI = 'MOU5T4CbX23xK3Emh0XUHby1DC15P1ng';
let $ = document
    .getElementById
    .bind(document);

    $('formInput').addEvenListener('reset',()=>$('root').innerHTML='');
    $('formInput').addEvenListener('submit',(e)=>onSubmitForm(e));

    getData=async(keyWord,keyAPI)=>{
        try{
            let{data} = await axios.get(' http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=dc6zaTOxFJmzC');
            return data.data;
        }catch(e){
            window.confirm(e);
        }
    }
    onSubmitForm-async(e)=> {
        e.preventDefault();
        keyWord = $('in').value;
        displayGiphy(await getData(keyWord,keyAPI));
    }
    displayGiphy = (giphyData) => {
        giphyData.slice(0,10).map(data => {
            $('root').innerHTML += <gip class="gip-thumnail ctn fct" src="${data.giphy.fixed_height.url}"></gip>
        })
    }