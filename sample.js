$(document).ready(function(){
  function score_indicate(){
    // このような記述をすることで、subject_pointsという変数の中に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];

    // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される
  let sum = subject_points.reduce(function(a, b ) { return a+b
    
  });
    
    $("#sum_indicate").text(sum);
    
   // ここに、上記を参考にして平均点を出力する処理を書き込む
    
    let average = sum/subject_points.length;
    $("#avarage_indicate").text(average);
    
  
   
  };

   // ここに、ランクの値の文字列（平均点が80点以上なら"A"、60点以上なら"B"、40点以上なら"C"、それ以下なら"D"）を出力する処理を書き込む

   function get_achievement(){
     
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
                          
    let sum = subject_points.reduce(function(a, b ) { return a+b
    
    });
    
    let average=sum/subject_points.length;
    $("#avarage_indicate").text(average);
    $("#btn-evaluation").on('click', function(){
      if (average>=80){
        $("#evaluation").text("A");
      }
      else if (average>=60){
        $("#evaluation").text("B");
      }
      else if (average>=40){
        $("#evaluation").text("C");
      }
      else{
        $("#evaluation").text("D");
      }
      
  
});
   
  };
    

  function get_pass_or_failure(){
    
    // ここに、全ての教科が60点以上なら"合格"の文字列、一つでも60点未満の教科があったら"不合格"の文字列を出す処理を書き込む
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
                          
    let number = subject_points.length;                       
    
 $("#btn-judge").on('click', function(){
   let gouhi = "合格";
  for(let i=0; i<number; i++){
    if(subject_points[i]<60){
      gouhi = "不合格";
      break;
    }
  }
  return $("#judge").text(gouhi);
   });
   
}
  function judgement(){
    // ここに、「最終ジャッジ」のボタンを押したら「あなたの成績はAです。合格です」といった内容を出力する処理を書き込む
    // 下記の記述をすることで、「最終ジャッジ」のボタンを押すと「あなたの成績は（ここに「ランク」の値を入れる）です。（ここに「判定」の値を入れる）です」という文字の入った水色のフキダシが出力される処理が実装される。
  
  hanntei=$("#judge").text();
  rank=$("#evaluation").text();
  
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${rank}です。${hanntei}です</label>`);
  };

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });

  $('#btn-evaluation').click(function() {
    get_achievement();
  });

  $('#btn-judge').click(function() {
    get_pass_or_failure();
  });

  $('#btn-declaration').click(function() {
    judgement();
  });
});
// ここに書かれているjsの記述はあくまでヒントとして用意された雛形なので、書かれている記述に従わずに実装したいという場合は、自分の好きに実装して構わない。課題要件を満たし、コードの品質が一定の水準にあると判定されればどのような実装でも合格になる。
// 例ではJavaScriptとJqueryの両方の記述を使用しているが、どちらかに統一しても構わない