$(document).ready(function(){
	$('#how-energizes').parent().click(function(){ 
		reset_tabs();
		$('#how-energizes').parent().addClass("active");
		$('.explanation .header').html("<span class=\"light\">ENERGIZE</span> YOUR NIGHT.");
		$('.explanation .text').text("PREVIVE reduces the drowsiness that often accompanies drinking. PREVIVE contains no caffeine; instead it rejuvenates through a host of ingredients that work synergistically to help neutralize the toxic effects of alcohol. People process alcohol in two steps. First the body turns it into acetaldehyde, which is around 30 times more toxic than alcohol. Acetaldehyde can inflict massive free radical-induced cellular damage, accelerating aging and increasing the likelihood of cancer. The body has trouble ridding itself of acetaldehyde, which results in a feeling of exhaustion and eventually a hangover. PREVIVE includes key nutrients that bind to acetaldehyde and turn it into a harmless compound called acetate. The result is a dramatic reduction in the draining feeling that oftenaccompanies drinking.");
		$('#periodic-b1').css({'background-position-y': '149px'});
		$('#periodic-b2').css({'background-position-y': '149px'});
		$('#periodic-b3').css({'background-position-y': '149px'});
		$('#periodic-b5').css({'background-position-y': '149px'});
		$('#periodic-b6').css({'background-position-y': '149px'});
		$('#periodic-b12').css({'background-position-y': '149px'});
		$('#periodic-bfn').css({'background-position-y': '149px'});
		$('#periodic-c').css({'background-position-y': '149px'});
		$('#periodic-nac').css({'background-position-y': '70px'});
		$('#periodic-tau').css({'background-position-y': '70px'});
		$('#periodic-zn').css({'background-position-y': '70px'});
	});
	$('#how-prevents').parent().click(function(){ 
		reset_tabs();
		$('#how-prevents').parent().addClass("active");
		$('.explanation .header').html("<span class=\"light\">PREVENT</span> HANGOVER SYMPTOMS.");
		$('.explanation .text').text("PREVIVE contains a patented time release process that works specifically with its unique blend of acetaldehyde-neutralizing ingredients to allow a single dose to counteract over four hours of drinking. In addition, it includes natural ingredients that go beyond deactivating toxins (acetaldehyde) and reduce the free radical-induced inflammation that results from alcohol consumption. Together, these ingredients decrease the potency of headaches, grogginess and nauseousness that accompany drinking. We caution that PREVIVE may not always eliminate hangover symptoms in their entirety, but should reduce their severity by a noticeable amount.");
		$('#periodic-bfn').css({'background-position-y': '149px'});
		$('#periodic-cr').css({'background-position-y': '149px'});
		$('#periodic-fte').css({'background-position-y': '149px'});
		$('#periodic-nac').css({'background-position-y': '70px'});
		$('#periodic-mg').css({'background-position-y': '70px'});
		$('#periodic-mo').css({'background-position-y': '70px'});
		$('#periodic-se').css({'background-position-y': '70px'});
		$('#periodic-turmeric').css({'background-position-y': '70px'});
		$('#periodic-zn').css({'background-position-y': '70px'});
	});
	$('#how-promotes').parent().click(function(){ 
		reset_tabs();
		$('#how-promotes').parent().addClass("active");
		$('.explanation .header').html("<span class=\"light\">PROMOTES</span> LONG TERM WELLNESS.");
		$('.explanation .text').text("PREVIVE promotes long-term wellness by delivering critical antioxidants that help protect the body from free radical-induced oxidative stress that can accompany alcohol consumption. The majority of PREVIVE’s ingredients promote the production of Glutathione, arguably the most powerful antioxidant in the world and an effective scavenger of pro-oxidant material. In addition, PREVIVE includes three liver protective agents. The first is grape seed extract, inspired by the \"French Paradox\", where the consumption of red wine is believed to be one of the reasons the French observe lower health risks. Next is an optimized form of Turmeric, another powerful antioxidant that is used frequently in Japan as a hangover preventative. Last is Milk Thistle, a well known herb that promotes long-term liver health.");
		$('#periodic-ala').css({'background-position-y': '149px'});
		$('#periodic-c').css({'background-position-y': '149px'});
		$('#periodic-e').css({'background-position-y': '149px'});
		$('#periodic-grape').css({'background-position-y': '70px'});
		$('#periodic-nac').css({'background-position-y': '70px'});
		$('#periodic-milk').css({'background-position-y': '70px'});
		$('#periodic-turmeric').css({'background-position-y': '70px'});
	});
	$('#how-convenient').parent().click(function(){ 
		reset_tabs();
		$('#how-convenient').parent().addClass("active");
		$('.explanation .header').html("<span class=\"light\">CONVENIENT.</span>");
		$('.explanation .text').text("PREVIVE’s unique format is small and light enough to easily carry around, individually packaged to keep it sanitary and safe on the go, and a single dose, eliminating the responsibility to consume it often.");
		$('#periodic-convenient').css({'background-position-y': '70px'});
	});
	$('#how-affordable').parent().click(function(){ 
		reset_tabs();
		$('#how-affordable').parent().addClass("active");
		$('.explanation .header').html("<span class=\"light\">AFFORDABLE.</span>");
		$('.explanation .text').text("Even though you may not get a bad hangover from a glass or two of wine, the health benefits from PREVIVE make it appropriate to any time you drink. With this in mind, we were careful to keep the price per dose at a point that would enable users to take it frequently, without breaking the bank, even though that has meant compromising our own margins.");
		$('#periodic-affordable').css({'background-position-y': '70px'});
	});
	function reset_tabs () {
		$('#how-energizes').parent().removeClass("active");
		$('#how-prevents').parent().removeClass("active");
		$('#how-promotes').parent().removeClass("active");
		$('#how-convenient').parent().removeClass("active");
		$('#how-affordable').parent().removeClass("active");
		$('.periodic-table .row:first-child .sub-row .element').css({'background-position-y': '0'});
		$('.periodic-table .row:last-child .sub-row .element').css({'background-position-y': '219px'});
	}
	$('#does-previve-work').click(function(){ 
		$('.answer').html("Yes.");
		reset_questions($(this));
	});
	$('#how-often-take').click(function(){ 
		reset_questions($(this));
		$('.answer').html("Often.");
	});
	$('#how-different').click(function(){ 
		$('.answer').html("<p>The hangover prevention market is a growing market, still in its infancy. There are over two dozen products, ranging from shots to beverages to even patches, all of which proclaim various supplements to be their miracle cure to hangovers. In fact there are over 110 ingredients in the industry that are claimed to be effective. This tells us that the market is highly fragmented! Compare this to the energy drink industry; it’s very clear what supplements are effective, most energy drink contains taurine, guarana, caffeine, and an overdose of B vitamins.</p><p>The makers of PREVIVE have spent hundreds, if not thousands of hours researching the market, ingredient efficacy, and consumer needs. First of all, let’s get one thing straight; there is no miracle cure to hangovers. angover is not a disease, it is a collection of symptoms and each person’s experience is different. With that said, PREVIVE is designed to target the three main factors that result in, what we call, a hangover; increased toxicity, dehydration, and nutrient depletion. PREVIVE targets these three key areas and uses the best possible ingredients to help your start the night right and feel great the next morning.</p><p>Finally, PREVIVE was developed with the customer in mind. That means creating a product that tastes great, provides results, and fits into our lifestyles. Personally, we at PREVIVE don’t think to ourselves, “man, I’m probably going to get drunk tonight I should take my hangover cure pills,” or “I had too much to drink tonight, I should take my hangover prevention shot before I go to bed!” When we get ready for a night there are only three things running through our mind, 1) I need some mixers S.T.A.T., 2) if I’m going to make it through the night, I need some energy, quick!, and 3) I hope I don’t feel this in the morning!</p><p>PREVIVE fits in perfectly! PREVIVE is great for shots or as a mixer, PREVIVE gives you the energy kick you need to get your night started, and provides the antioxidants, electrolytes, and nutrients your body requires when trying to fight off a hangover.</p>");
		reset_questions($(this));
	});
	$('#what-are-ingredients').click(function(){ 
		$('.answer').html("Lots.");
		reset_questions($(this));
	});
	$('#contain-caffeine').click(function(){ 
		$('.answer').html("No.");
		reset_questions($(this));
	});
	$('#is-safe').click(function(){ 
		$('.answer').html("Yes.");
		reset_questions($(this));
	});
	$('#is-addictive').click(function(){ 
		$('.answer').html("No.");
		reset_questions($(this));
	});
	$('#any-side-effects').click(function(){ 
		$('.answer').html("No.");
		reset_questions($(this));
	});
	$('#help-alcoholism').click(function(){ 
		$('.answer').html("No.");
		reset_questions($(this));
	});
	$('#take-if-dont-drink').click(function(){ 
		$('.answer').html("Sure.");
		reset_questions($(this));
	});
	$('#prevent-intoxication').click(function(){ 
		$('.answer').html("I've been instructed by my lawyer to say No.");
		reset_questions($(this));
	});
	$('#where-to-buy').click(function(){ 
		$('.answer').html("Here.");
		reset_questions($(this));
	});
	function reset_questions(link) {
		$('#does-previve-work').removeClass("active");
		$('#how-often-take').removeClass("active");
		$('#how-different').removeClass("active");
		$('#what-are-ingredients').removeClass("active");
		$('#contain-caffeine').removeClass("active");
		$('#is-safe').removeClass("active");
		$('#is-addictive').removeClass("active");
		$('#any-side-effects').removeClass("active");
		$('#help-alcoholism').removeClass("active");
		$('#take-if-dont-drink').removeClass("active");
		$('#prevent-intoxication').removeClass("active");
		$('#where-to-buy').removeClass("active");
		link.addClass("active");
	}
	$(".arrow-selector").on("click", function() {
		var arrow = $(this);
		var numboxes = arrow.parent().parent().children(".num-boxes");
		var doses = arrow.parent().parent().parent().parent().children(".description").children("span.doses");
		var pills = arrow.parent().parent().parent().parent().children(".description").children("span.pills");
		var price = arrow.parent().parent().parent().parent().children(".price").children("span.price");
		var btnbuy = arrow.parent().parent().parent().parent().children(".checkout-button").children("a.btn-buy");

		if (arrow.hasClass("arrow-up")) {
			var newVal = parseFloat(numboxes.text()) + 1;
		} else {
			if (numboxes.text() > 3) {
				var newVal = parseFloat(numboxes.text()) - 1;
			} else {
				newVal = 3;
			}
		}
		numboxes.text(newVal);
		doses.text(newVal * 10);
		pills.text(newVal * 40);
		price.text("$" + (newVal * 10 * 1.83).toFixed(2));
		btnbuy.attr("href", "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=TG9JEYXZQ8YNG&lc=US&item_name=PREVIVE%20%2d%20Box&item_number=0001&amount=18%2e3&currency_code=USD&quantity="+newVal);
	});
});