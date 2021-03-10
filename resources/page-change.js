function changePage(){
    document.addEventListener('DOMContentLoaded',function(event){
        const navigationItems=document.getElementsByClassName('navigation-item');
    
        for(let i=0; i<navigationItems.length; i++) {
            const navigationItem=navigationItems[i];

            navigationItem.addEventListener('click', function(){
                for(let j=0; j<navigationItems.length; j++) {
                    if(navigationItems[j].classList.contains('selected')){
                        navigationItems[j].classList.remove('selected');
                    } else{
                            continue;
                        }
                }
                navigationItem.classList.add('selected');
                
                ///////////////pages
                const dataContent=navigationItem.dataset.content;
                console.log('DataContent', dataContent);
                const page=document.getElementsByClassName('page');
                for(k=0; k<page.length; k++){
                    if(page[k].classList.contains('hidden')){
                        continue;
                    } else{
                        page[k].classList.add('hidden');
                    }                
                }
                document.getElementsByClassName(dataContent)[0].classList.remove('hidden');
            
                //////////////logo
                const logoImg=document.getElementById('logo-img');
                console.log('logoImg',logoImg);
                const mainTitleElement=document.getElementById('main-title');
                const orderDetails=document.getElementsByClassName('order');
                
                // candidatul perfect pentru un switch aici
                // si toate regulile care se repet aici trebuie sa le pui de fiecare data oare? nu exista o alta modalitate sa faci asta? codul repetitiv mereu trebuie sa fie un semnal de alarma
                if(dataContent==='your-orders-summary'){
                    logoImg.setAttribute('src', 'assets/logo-vip.png');
                    logoImg.setAttribute('alt', 'logo-vip.png');
                    mainTitleElement.innerHTML='Order <span>Details</span>';
                    orderDetails[0].classList.remove('hidden');
                    orderDetails[1].classList.remove('hidden');
                
                } else if(dataContent==='reword-status'){
                    logoImg.setAttribute('src', 'assets/logo-gold.png');
                    logoImg.setAttribute('alt', 'logo-gold.png');
                    mainTitleElement.innerHTML='Reward <span>Status</span>';
                    orderDetails[0].classList.add('hidden');
                    orderDetails[1].classList.add('hidden');
                
                } else if(dataContent==='account-settings'){
                    logoImg.setAttribute('src', 'assets/logo-elite.png');
                    logoImg.setAttribute('alt', 'logo-elite.png');
                    mainTitleElement.innerHTML='Account <span>Settings</span>';
                    orderDetails[0].classList.add('hidden');
                    orderDetails[1].classList.add('hidden');
                
                } else if(dataContent==='payment-methods'){
                    logoImg.setAttribute('src', 'assets/logo-member.png');
                    logoImg.setAttribute('alt', 'logo-member.png');
                    mainTitleElement.innerHTML='Payment <span>Methods</span>';
                    orderDetails[0].classList.add('hidden');
                    orderDetails[1].classList.add('hidden');
                }           
            });
        }
    })
}
 changePage();