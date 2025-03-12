```text
<h3>talaabada koowaadh</h3>

<p></p>soo degso diyaarso local data hoos fiiri</p>

 1. local url
 ................
 base_url: string ='http://localhost:3000/Users';


 2.  inject server
 ....................
  http= inject(HttpClient);


    
 3. load data
 ...................
  getData(){
    return this.http.get<Iuser[]>(this.base_url);
  }
   
  3. inter face
  ..................
  apiData: Iuser[]=[]

  4. geAllData
 .................
   getAllData(){
  this.crudService.getData().subscribe(res =>{
 this.apiData = res;
 console.table(this.apiData)
  })
} 



```