// JavaScript Document
async function ipGET () {
	let tracker = await fetch('https://api.my-ip.io/ip.json')
	let data = await tracker.json()
	console.log(data.ip)
	todayDate(data)
	return data;
	
}

async function todayDate (data) {
	let api_key = 'aqVaNKiIwzCEiQGqambA'
	let tracker2 = await fetch (`https://timezoneapi.io/api/ip/?token=${api_key}&${data.ip}`)
	let data2 = await tracker2.json()
	var date = document.getElementById("date")
	var month = document.getElementById("cal_text1")
	var weekday = document.getElementById("cal_text2")
	date.innerHTML=`${data2.data.datetime.date}`
	month.innerHTML=`${data2.data.datetime.month_full},${data2.data.datetime.day},${data2.data.datetime.year}`
	weekday.innerHTML=`${data2.data.datetime.day_full}`
	console.log(data2.data.datetime.date)
}

window.addEventListener('load', (event) => {
ipGET()	
});