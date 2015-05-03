var c = jQuery.noConflict();

c(document).ready(function()
{
	c('.footerlinks').click(function(){
		c('.backdrop, .box').animate({'opacity':'.50'}, 300, 'linear');
		c('.backdrop').css('position', 'fixed');
		c('.backdrop').css('height', '100%');
		c('.backdrop').css('width', '100%');
		c('.backdrop').css('z-index', '100');
		c('.backdrop').css('background-color', '#000000');
		c('.box').animate({'opacity':'1.00'}, 300, 'linear');
		
		if(this.id == 'privacy')
		{
			c('.backdrop, .box').css('display', 'block');
			c('#privInner').css('display', 'block');
		}
		else if(this.id == 'terms')
		{
			c('.backdrop, .box').css('display', 'block');
			c('#termsInner').css('display', 'block');
		}
		else if(this.id == 'sitemap')
		{
			c('.backdrop, .box').css('display', 'block');
			c('#sitemapInner').css('display', 'block');
		}
	});

	c('.close').click(function(){
		close_box();
	});

	c('.backdrop').click(function(){
		close_box();
	});

});

function close_box()
{
	c('.backdrop, .box').animate({'opacity':'0'}, 300, 'linear', function(){
		c('.backdrop, .box').css('display', 'none');
		c('#privInner').css('display', 'none');
		c('#termsInner').css('display', 'none');
		c('#sitemapInner').css('display', 'none');
	});
}