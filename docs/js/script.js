
var MAX_RESULTS = 1000;

var outputItem = function( label, value, link ){

    if ( value ) {
        if( link === true ){
            var output = '<a href="' + value + '" target="_blank">' + value + '</a>';
        } else {
            var output = value;
        }
        var state  = ''
    } else if( value === undefined ){
        var output = '-';
        var state  = ' error'
    } else {
        var output = '';
        var state  = ' warning'
    }

    return '<div class="item' + state + '"><span class="label">' + label + '</span><span class="val">' + output + '</span></div>';
};

var printResults = function( results ){

    var outputHtml = '';

    jQuery.each(results, function(i){

        outputHtml += results[i];

        if( i == results.length -1 ){
            $('#report-table').append( outputHtml );

            setTimeout(function(){
                $('#loader').removeClass('is-show');
                $('#report').addClass('is-show');
            }, 500 );
        }
    });
};

$('#submit').on('click', function(){

    var url = $('#url').val();

    if(!url) {
        alert('URLを入力してください');
        return;
    }

    // URLを配列に
    var urlList = url.split(/\r\n|\r|\n/);

    if( urlList.length > MAX_RESULTS ){
        alert('最大取得件数は' + MAX_RESULTS + '件です');
        return;
    }

    var reportHtml = [];

    // チェックされている要素を取得
    var isChecked_title          = $('input[name="title"]').prop('checked');
    var isChecked_h1             = $('input[name="h1"]').prop('checked');
    var isChecked_description    = $('input[name="description"]').prop('checked');
    var isChecked_keywords       = $('input[name="keywords"]').prop('checked');
    var isChecked_robots         = $('input[name="robots"]').prop('checked');
    var isChecked_canonical      = $('input[name="canonical"]').prop('checked');
    var isChecked_alternate      = $('input[name="alternate"]').prop('checked');
    var isChecked_amphtml        = $('input[name="amphtml"]').prop('checked');
    var isChecked_app_id         = $('input[name="app_id"]').prop('checked');
    var isChecked_ogurl          = $('input[name="ogurl"]').prop('checked');
    var isChecked_ogtype         = $('input[name="ogtype"]').prop('checked');
    var isChecked_ogtitle        = $('input[name="ogtitle"]').prop('checked');
    var isChecked_ogimage        = $('input[name="ogimage"]').prop('checked');
    var isChecked_ogdescription  = $('input[name="ogdescription"]').prop('checked');
    var isChecked_ogsite_name    = $('input[name="ogsite_name"]').prop('checked');
    var isChecked_oglocale       = $('input[name="oglocale"]').prop('checked');
    var isChecked_article_author = $('input[name="article_author"]').prop('checked');
    var isChecked_twcard         = $('input[name="twcard"]').prop('checked');
    var isChecked_twsite         = $('input[name="twsite"]').prop('checked');
    var isChecked_twcreator      = $('input[name="twcreator"]').prop('checked');
    var isChecked_twurl          = $('input[name="twurl"]').prop('checked');
    var isChecked_twtitle        = $('input[name="twtitle"]').prop('checked');
    var isChecked_twdescription  = $('input[name="twdescription"]').prop('checked');
    var isChecked_twimage        = $('input[name="twimage"]').prop('checked');

    // ローダー表示
    $('#wrapper').css('display', 'none');
    $('#loader').addClass('is-show');


    for(i = 0; i < urlList.length; i++ ){

        $.ajax({
          url: urlList[i],
          method: 'GET',
          dataType: 'html',
          context: {
            num : i + 1,
            url : urlList[i]
          }
        })
        .then( function( data ) {

            var res  = $( '<div>' + data + '</div>' );
            var html = '';
            html += '<tr><th>' + this.num +'</th><th><a href="' + this.url + '" target="_blank">' + this.url +'</a></th><td><div class="items">';

            if( isChecked_title )
                html += outputItem('title', res.find('title').html(), false );

            if( isChecked_h1 )
                html += outputItem('h1', res.find('h1').html(), false );

            if( isChecked_description )
                html += outputItem('description', res.find('meta[name="description"]').attr( "content" ), false );

            if( isChecked_keywords )
                html += outputItem('keywords', res.find('meta[name="keywords"]').attr( "content" ), false );

            if( isChecked_robots )
                html += outputItem('robots', res.find('meta[name="robots"]').attr( "content" ), false );

            if( isChecked_canonical )
                html += outputItem('canonical', res.find('link[rel="canonical"]').attr( "href" ), true );

            if( isChecked_alternate )
                html += outputItem('alternate', res.find('link[rel="alternate"]').attr( "href" ), true );

            if( isChecked_amphtml )
                html += outputItem('amphtml', res.find('link[rel="amphtml"]').attr( "href" ), true );

            if( isChecked_app_id )
                html += outputItem('fb:app_id', res.find('meta[property="fb:app_id"]').attr( "content" ), false );

            if( isChecked_ogurl )
                html += outputItem('og:url', res.find('meta[property="og:url"]').attr( "content" ), true );

            if( isChecked_ogtype )
                html += outputItem('og:type', res.find('meta[property="og:type"]').attr( "content" ), false );

            if( isChecked_ogtitle )
                html += outputItem('og:title', res.find('meta[property="og:title"]').attr( "content" ), false );

            if( isChecked_ogimage )
                html += outputItem('og:image', res.find('meta[property="og:image"]').attr( "content" ), true );

            if( isChecked_ogdescription )
                html += outputItem('og:description', res.find('meta[property="og:description"]').attr( "content" ), false );

            if( isChecked_ogsite_name )
                html += outputItem('og:site_name', res.find('meta[property="og:site_name"]').attr( "content" ), false );

            if( isChecked_oglocale )
                html += outputItem('og:locale', res.find('meta[property="og:locale"]').attr( "content" ), false );

            if( isChecked_article_author )
                html += outputItem('article:author', res.find('meta[property="article:author"]').attr( "content" ), false );

            if( isChecked_twcard )
                html += outputItem('twitter:card', res.find('meta[name="twitter:card"]').attr( "content" ), false );

            if( isChecked_twsite )
                html += outputItem('twitter:site', res.find('meta[name="twitter:site"]').attr( "content" ), false );

            if( isChecked_twcreator )
                html += outputItem('twitter:creator', res.find('meta[name="twitter:creator"]').attr( "content" ), false );

            if( isChecked_twurl )
                html += outputItem('twitter:url', res.find('meta[name="twitter:url"]').attr( "content" ), true );

            if( isChecked_twtitle )
                html += outputItem('twitter:title', res.find('meta[name="twitter:title"]').attr( "content" ), false );

            if( isChecked_twdescription )
                html += outputItem('twitter:description', res.find('meta[name="twitter:description"]').attr( "content" ), false );

            if( isChecked_twimage )
                html += outputItem('twitter:image', res.find('meta[name="twitter:image"]').attr( "content" ), true );

            html += '</div></td></tr>'

            reportHtml[this.num - 1] = html;

            // 全件取得が完了したら出力
            if( this.num >= urlList.length ){
                printResults(reportHtml);
            }

        });
    }

});