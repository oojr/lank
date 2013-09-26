//lank

//dialog

lankModule.directive('kDialog', function(){
	return {
		restrict: 'E',
		replace: true,
		transclude:true,
		scope:{
			title:'@',
			onYes:'&',
			onNo:'&',
			visible: "="
		},
		templateUrl: "templates/dialog.html",
		link: function(scope, element, attrs){
            var dialog = document.getElementById('dialog');
            dialogWidth = dialog.offsetWidth;
            dialogHeight = dialog.offsetHeight;
            dialog.style.marginLeft = ((dialogWidth/2)*-1)+'px';
            dialog.style.marginTop = ((dialogHeight/2)*-1)+'px';


            
		}
	};
})

angular.module('lankDemoApp',['lankcomponents'])