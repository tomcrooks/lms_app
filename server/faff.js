const Discord = require('discord.js')
const bot = new Discord.Client()
const axios = require('axios');
const oddsApiKey = "06ae1e72955ba3d027b2e960456b316a"
const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const homePage = await browser.newPage();
	const clubsPage = await browser.newPage();

	await homePage.goto('https://www.premierleague.com/home', { waitUntil: "networkidle2" });
	await clubsPage.goto('https://www.premierleague.com/clubs', { waitUntil: "networkidle2" });

	let otherData = await homePage.evaluate(() => {
		const teamsAndAbbr = Array
			.from(document.querySelectorAll("span.teamName > abbr"))
			.map($el => ({ team: $el.title, abbr: $el.innerText.trim() }));

		const fixtureRows = Array.from(document.querySelectorAll("a.matchAbridged"))
		const fixtures = fixtureRows.map($el => Array.from($el.querySelectorAll("span.teamName, time.renderKOContainer")).map($el => $el.innerText))

		// const tempFixtures = Array.from(document.querySelectorAll("a.matchAbridged")).map($el => $el.innerText.trim().split())

		return {
			teamsAndAbbr,
			fixtures
		}
	})

	let teamsAndGrounds = await clubsPage.evaluate(() => {
		let data = Array
			.from(document.querySelectorAll("div.indexInfo > div.nameContainer"))
			.map($el => ({
				team: $el.innerText.split("\n")[0],
				stadium: $el.innerText.split("\n")[1]
			}))

		return data
	})

	debugger;

	await browser.close();
})();
