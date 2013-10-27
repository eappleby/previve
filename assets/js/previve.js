$(document).ready(function(){
	$('#how-energizes').click(function(){ 
		resetpage();
		$('#how-energizes').parent().addClass("active");
		$('.content-anchor').text("ENERGIZE");
		$('.content-header').text("YOUR NIGHT.");
		$('.content-text').text("PREVIVE reduces the drowsiness that often accompanies drinking. PREVIVE contains no caffeine; instead it rejuvenates through a host of ingredients that work synergistically to help neutralize the toxic effects of alcohol. People process alcohol in two steps. First the body turns it into acetaldehyde, which is around 30 times more toxic than alcohol. Acetaldehyde can inflict massive free radical-induced cellular damage, accelerating aging and increasing the likelihood of cancer. The body has trouble ridding itself of acetaldehyde, which results in a feeling of exhaustion and eventually a hangover. PREVIVE includes key nutrients that bind to acetaldehyde and turn it into a harmless compound called acetate. The result is a dramatic reduction in the draining feeling that oftenaccompanies drinking.");
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
	$('#how-prevents').click(function(){ 
		resetpage();
		$('#how-prevents').parent().addClass("active");
		$('.content-anchor').text("PREVENT");
		$('.content-header').text("HANGOVER SYMPTOMS.");
		$('.content-text').text("PREVIVE contains a patented time release process that works specifically with its unique blend of acetaldehyde-neutralizing ingredients to allow a single dose to counteract over four hours of drinking. In addition, it includes natural ingredients that go beyond deactivating toxins (acetaldehyde) and reduce the free radical-induced inflammation that results from alcohol consumption. Together, these ingredients decrease the potency of headaches, grogginess and nauseousness that accompany drinking. We caution that PREVIVE may not always eliminate hangover symptoms in their entirety, but should reduce their severity by a noticeable amount.");
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
	$('#how-promotes').click(function(){ 
		resetpage();
		$('#how-promotes').parent().addClass("active");
		$('.content-anchor').text("PROMOTES");
		$('.content-header').text("LONG TERM WELLNESS.");
		$('.content-text').text("PREVIVE promotes long-term wellness by delivering critical antioxidants that help protect the body from free radical-induced oxidative stress that can accompany alcohol consumption. The majority of PREVIVE’s ingredients promote the production of Glutathione, arguably the most powerful antioxidant in the world and an effective scavenger of pro-oxidant material. In addition, PREVIVE includes three liver protective agents. The first is grape seed extract, inspired by the \"French Paradox\", where the consumption of red wine is believed to be one of the reasons the French observe lower health risks. Next is an optimized form of Turmeric, another powerful antioxidant that is used frequently in Japan as a hangover preventative. Last is Milk Thistle, a well known herb that promotes long-term liver health.");
		$('#periodic-ala').css({'background-position-y': '149px'});
		$('#periodic-c').css({'background-position-y': '149px'});
		$('#periodic-e').css({'background-position-y': '149px'});
		$('#periodic-grape').css({'background-position-y': '70px'});
		$('#periodic-nac').css({'background-position-y': '70px'});
		$('#periodic-milk').css({'background-position-y': '70px'});
		$('#periodic-turmeric').css({'background-position-y': '70px'});
	});
	$('#how-convenient').click(function(){ 
		resetpage();
		$('#how-convenient').parent().addClass("active");
		$('.content-anchor').text("CONVENIENT.");
		$('.content-header').text("");
		$('.content-text').text("PREVIVE’s unique format is small and light enough to easily carry around, individually packaged to keep it sanitary and safe on the go, and a single dose, eliminating the responsibility to consume it often.");
		$('#periodic-convenient').css({'background-position-y': '70px'});
	});
	$('#how-affordable').click(function(){ 
		resetpage();
		$('#how-affordable').parent().addClass("active");
		$('.content-anchor').text("AFFORDABLE.");
		$('.content-header').text("");
		$('.content-text').text("Even though you may not get a bad hangover from a glass or two of wine, the health benefits from PREVIVE make it appropriate to any time you drink. With this in mind, we were careful to keep the price per dose at a point that would enable users to take it frequently, without breaking the bank, even though that has meant compromising our own margins.");
		$('#periodic-affordable').css({'background-position-y': '70px'});
	});
	function resetpage () {
		$('#how-energizes').parent().removeClass("active");
		$('#how-prevents').parent().removeClass("active");
		$('#how-promotes').parent().removeClass("active");
		$('#how-convenient').parent().removeClass("active");
		$('#how-affordable').parent().removeClass("active");
		$('.periodic-table .row:first-child .sub-row .element').css({'background-position-y': '0'});
		$('.periodic-table .row:last-child .sub-row .element').css({'background-position-y': '219px'});
	}
});