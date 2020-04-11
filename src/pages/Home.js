import React from 'react';
// import './App.css';

function Home() {
  return (
    <div>
        <h1>Home Page</h1>
        Wiki
From Wikipedia, the free encyclopedia
Jump to navigationJump to search
This article is about the type of website. For other uses, see Wiki (disambiguation).
File:Ward Cunningham, Inventor of the Wiki.webm
Interview with Ward Cunningham, inventor of the wiki
A wiki (/ˈwɪki/ (About this soundlisten) WIK-ee) is a knowledge base website on which users collaboratively modify and structure content directly from a web browser. In a typical wiki, text is written using a simplified markup language and often edited with the help of a rich-text editor.[1]

A wiki is run using wiki software, otherwise known as a wiki engine. A wiki engine is a type of content management system, but it differs from most other such systems, including blog software, in that the content is created without any defined owner or leader, and wikis have little inherent structure, allowing structure to emerge according to the needs of the users.[2] There are dozens of different wiki engines in use, both standalone and part of other software, such as bug tracking systems. Some wiki engines are open source, whereas others are proprietary. Some permit control over different functions (levels of access); for example, editing rights may permit changing, adding, or removing material. Others may permit access without enforcing access control. Other rules may be imposed to organize content.

The online encyclopedia project Wikipedia is the most popular wiki-based website, and is one of the most widely viewed sites in the world, having been ranked in the top ten since 2007.[3] Wikipedia is not a single wiki but rather a collection of hundreds of wikis, with each one pertaining to a specific language. In addition to Wikipedia, there are hundreds of thousands of other wikis in use, both public and private, including wikis functioning as knowledge management resources, notetaking tools, community websites, and intranets. The English-language Wikipedia has the largest collection of articles: as of February 2020, it has over 6 million articles. Ward Cunningham, the developer of the first wiki software, WikiWikiWeb, originally described wiki as "the simplest online database that could possibly work".[4] "Wiki" (pronounced [ˈwiki][note 1]) is a Hawaiian word meaning "quick".[5][6][7]


Contents
1	Characteristics
1.1	Editing
1.1.1	Navigation
1.1.2	Consistency
1.1.3	Basic syntax
1.1.4	Visual editing
1.1.5	Version history
1.1.6	Edit summary
1.2	Navigation
1.3	Linking and creating pages
1.4	Searching
2	History
3	Alternative definitions
4	Implementations
5	Trust and security
5.1	Controlling changes
5.2	Trustworthiness and reliability of content
5.3	Security
5.3.1	Potential malware vector
6	Communities
6.1	Applications
6.2	City wikis
6.3	WikiNodes
6.4	Participants
6.5	Growth factors
7	Conferences
8	Rules
9	Legal environment
10	See also
11	Notes
12	References
13	Further reading
14	External links
Characteristics

This section needs additional citations for verification. Please help improve this article by adding citations to reliable sources. Unsourced material may be challenged and removed.
Find sources: "Wiki" – news · newspapers · books · scholar · JSTOR (March 2017) (Learn how and when to remove this template message)

Ward Cunningham, inventor of the wiki
Ward Cunningham and co-author Bo Leuf, in their book The Wiki Way: Quick Collaboration on the Web, described the essence of the Wiki concept as follows:[8]

A wiki invites all users—not just experts—to edit any page or to create new pages within the wiki Web site, using only a standard "plain-vanilla" Web browser without any extra add-ons.
Wiki promotes meaningful topic associations between different pages by making page link creation intuitively easy and showing whether an intended target page exists or not.
A wiki is not a carefully crafted site created by experts and professional writers, and designed for casual visitors. Instead, it seeks to involve the typical visitor/user in an ongoing process of creation and collaboration that constantly changes the website landscape.
A wiki enables communities of editors and contributors to write documents collaboratively. All that people require to contribute is a computer, Internet access, a web browser, and a basic understanding of a simple markup language (e.g., MediaWiki markup language). A single page in a wiki website is referred to as a "wiki page", while the entire collection of pages, which are usually well-interconnected by hyperlinks, is "the wiki". A wiki is essentially a database for creating, browsing, and searching through information. A wiki allows non-linear, evolving, complex, and networked text, while also allowing for editor argument, debate, and interaction regarding the content and formatting.[9] A defining characteristic of wiki technology is the ease with which pages can be created and updated. Generally, there is no review by a moderator or gatekeeper before modifications are accepted and thus lead to changes on the website. Many wikis are open to alteration by the general public without requiring registration of user accounts. Many edits can be made in real-time and appear almost instantly online, but this feature facilitates abuse of the system. Private wiki servers require user authentication to edit pages, and sometimes even to read them. Maged N. Kamel Boulos, Cito Maramba, and Steve Wheeler write that the open wikis produce a process of Social Darwinism. "... because of the openness and rapidity that wiki pages can be edited, the pages undergo an evolutionary selection process not unlike that which nature subjects to living organisms. "Unfit" sentences and sections are ruthlessly culled, edited and replaced if they are not considered "fit", which hopefully results in the evolution of a higher quality and more relevant page."[10]

Editing
For the project page on editing Wikitext on Wikipedia, see Help:Wikitext.
Wikitext
Cheatsheet
All Wikitext
Magic links
Visual files
Sound files
Tables
Using templates
Using HTML codes within Wikitext
vte
Navigation
Some wikis have an Edit button or link directly on the page being viewed, if the user has permission to edit the page. This can lead to a text-based editing page where participants can structure and format wiki pages with a simplified markup language, sometimes known as Wikitext, Wiki markup or Wikicode (it can also lead to a WYSIWYG editing page; see the paragraph after the table below). For example, starting lines of text with asterisks could create a bulleted list. The style and syntax of wikitexts can vary greatly among wiki implementations,[example needed] some of which also allow HTML tags.

Consistency
Wikis have favoured plain-text editing, with fewer and simpler conventions than HTML, for indicating style and structure. Although limiting access to HTML and Cascading Style Sheets (CSS) of wikis limits user ability to alter the structure and formatting of wiki content, there are some benefits. Limited access to CSS promotes consistency in the look and feel, and having JavaScript disabled prevents a user from implementing code that may limit other users' access.

Basic syntax
MediaWiki syntax (the "behind the scenes" code used to add formatting to text)	Equivalent HTML (another type of "behind the scenes" code used to add formatting to text)	Rendered output (seen onscreen by a regular web user)
"Take some more [[tea]]," the March Hare said to Alice, very earnestly.

"I've had '''nothing''' yet," Alice replied in an offended tone, "so I can't take more."

"You mean you can't take ''less''," said the Hatter. "It's very easy to take ''more'' than nothing."
<p>"Take some more <a href="/wiki/Tea" title="Tea">tea</a>," the March Hare said to Alice, very earnestly.</p>

<p>"I've had <b>nothing</b> yet," Alice replied in an offended tone, "so I can't take more."</p>

<p>"You mean you can't take <i>less</i>," said the Hatter. "It's very easy to take <i>more</i> than nothing."</p>
"Take some more tea," the March Hare said to Alice, very earnestly.
"I've had nothing yet," Alice replied in an offended tone, "so I can't take more."

"You mean you can't take less," said the Hatter. "It's very easy to take more than nothing."


Visual editing
Wikis can also make WYSIWYG editing available to users, usually by means of JavaScript control that translates graphically entered formatting instructions into the corresponding HTML tags or wikitext. In those implementations, the markup of a newly edited, marked-up version of the page is generated and submitted to the server transparently, shielding the user from this technical detail. An example of this is the VisualEditor on Wikipedia. WYSIWYG controls do not, however, always provide all of the features available in wikitext, and some users prefer not to use a WYSIWYG editor. Hence, many of these sites offer some means to edit the wikitext directly.

Version history
Some wikis keep a record of changes made to wiki pages; often, every version of the page is stored. This means that authors can revert to an older version of the page should it be necessary because a mistake has been made, such as the content accidentally being deleted or the page has been vandalized to include offensive or malicious text or other inappropriate content.

Edit summary
Many wiki implementations, such as MediaWiki, the software that powers Wikipedia, allow users to supply an edit summary when they edit a page. This is a short piece of text summarizing the changes they have made (e.g., "Corrected grammar," or "Fixed formatting in table."). It is not inserted into the article's main text, but is stored along with that revision of the page, allowing users to explain what has been done and why, similar to a log message when making changes in a revision-control system. This enables other users to see which changes have been made by whom and why, often in a list of summaries, dates and other short, relevant content, a list which is called a "log" or "history."

Navigation
Within the text of most pages, there are usually many hypertext links to other pages within the wiki. This form of non-linear navigation is more "native" to a wiki than structured/formalized navigation schemes. Users can also create any number of index or table-of-contents pages, with hierarchical categorization or whatever form of organization they like. These may be challenging to maintain "by hand", as multiple authors and users may create and delete pages in an ad hoc, unorganized manner. Wikis can provide one or more ways to categorize or tag pages to support the maintenance of such index pages. Some wikis, including the original, have a backlink feature, which displays all pages that link to a given page. It is also typically possible in a wiki to create links to pages that do not yet exist, as a way to invite others to share what they know about a subject new to the wiki. Wiki users can typically "tag" pages with categories or keywords, to make it easier for other users to find the article. For example, a user creating a new article on cold weather cycling might "tag" this page under the categories of commuting, winter sports and bicycling. This would make it easier for other users to find the article.

Linking and creating pages
Links are created using a specific syntax, the so-called "link pattern". Originally, most wikis[citation needed] used CamelCase to name pages and create links. These are produced by capitalizing words in a phrase and removing the spaces between them (the word "CamelCase" is itself an example). While CamelCase makes linking easy, it also leads to links in a form that deviates from the standard spelling. To link to a page with a single-word title, one must abnormally capitalize one of the letters in the word (e.g. "WiKi" instead of "Wiki"). CamelCase-based wikis are instantly recognizable because they have many links with names such as "TableOfContents" and "BeginnerQuestions." It is possible for a wiki to render the visible anchor of such links "pretty" by reinserting spaces, and possibly also reverting to lower case. This reprocessing of the link to improve the readability of the anchor is, however, limited by the loss of capitalization information caused by CamelCase reversal. For example, "RichardWagner" should be rendered as "Richard Wagner", whereas "PopularMusic" should be rendered as "popular music". There is no easy way to determine which capital letters should remain capitalized. As a result, many wikis now have "free linking" using brackets, and some disable CamelCase by default.

Searching
Most wikis offer at least a title search, and sometimes a full-text search. The scalability of the search depends on whether the wiki engine uses a database. Some wikis, such as PmWiki, use flat files.[11] MediaWiki's first versions used flat files, but it was rewritten by Lee Daniel Crocker in the early 2000s (decade) to be a database application. Indexed database access is necessary for high speed searches on large wikis. Alternatively, external search engines such as Google Search can sometimes be used on wikis with limited searching functions in order to obtain more precise results.

History
Main article: History of wikis

Wiki Wiki Shuttle at Honolulu International Airport
WikiWikiWeb was the first wiki.[12] Ward Cunningham started developing WikiWikiWeb in Portland, Oregon, in 1994, and installed it on the Internet domain c2.com on March 25, 1995. It was named by Cunningham, who remembered a Honolulu International Airport counter employee telling him to take the "Wiki Wiki Shuttle" bus that runs between the airport's terminals. According to Cunningham, "I chose wiki-wiki as an alliterative substitute for 'quick' and thereby avoided naming this stuff quick-web."[13][14]

Cunningham was, in part, inspired by Apple Inc.'s HyperCard, which he had used. HyperCard, however, was single-user.[15] Apple had designed a system allowing users to create virtual "card stacks" supporting links among the various cards. Cunningham developed Vannevar Bush's ideas by allowing users to "comment on and change one another's text."[1][16] Cunningham says his goals were to link together people's experiences to create a new literature to document programming patterns, and to harness people's natural desire to talk and tell stories with a technology that would feel comfortable to those not used to "authoring".[15]

Wikipedia became the most famous wiki site, launched in January 2001 and entering the top ten most popular websites in 2007. In the early 2000s (decade), wikis were increasingly adopted in enterprise as collaborative software. Common uses included project communication, intranets, and documentation, initially for technical users. Some companies use wikis as their only collaborative software and as a replacement for static intranets, and some schools and universities use wikis to enhance group learning. There may be greater use of wikis behind firewalls than on the public Internet. On March 15, 2007, the word wiki was listed in the online Oxford English Dictionary.[17]

Alternative definitions
In the late 1990s and early 2000s, the word "wiki" was used to refer to both user-editable websites and the software that powers them; the latter definition is still occasionally in use.[2] Wiki inventor Ward Cunningham wrote in 2014[18] that the word "wiki" should not be used to refer to a single website, but rather to a mass of user-editable pages and or sites, so that a single website is not "a wiki" but "an instance of wiki". He wrote that the concept of wiki federation, in which the same content can be hosted and edited in more than one location in a manner similar to distributed version control, meant that the concept of a single discrete "wiki" no longer made sense.[19]

Implementations
See also: List of wiki software
Wiki software is a type of collaborative software that runs a wiki system, allowing web pages to be created and edited using a common web browser. It may be implemented as a series of scripts behind an existing web server, or as a standalone application server that runs on one or more web servers. The content is stored in a file system, and changes to the content are stored in a relational database management system. A commonly implemented software package is MediaWiki, which runs Wikipedia. Alternatively, personal wikis run as a standalone application on a single computer. WikidPad is an example. One application, TiddlyWiki, simply makes use of an even single local HTML file with JavaScript inside.

Wikis can also be created on a "wiki farm", where the server-side software is implemented by the wiki farm owner. PBwiki, Socialtext, and Wikia are popular examples of such services. Some wiki farms can also make private, password-protected wikis. Free wiki farms generally contain advertising on every page. For more information, see Comparison of wiki farms.

Trust and security
Controlling changes
"Recent changes" redirects here. For the Wikipedia help page, see Help:Recent changes. For the recent changes page itself, see Special:RecentChanges.

History comparison reports highlight the changes between two revisions of a page.
Wikis are generally designed with the philosophy of making it easy to correct mistakes, rather than making it difficult to make them. Thus, while wikis are very open, they provide a means to verify the validity of recent additions to the body of pages. The most prominent, on almost every wiki, is the "Recent Changes" page—a specific list numbering recent edits, or a list of edits made within a given time frame.[20] Some wikis can filter the list to remove minor edits and edits made by automatic importing scripts ("bots").[21] From the change log, other functions are accessible in most wikis: the revision history shows previous page versions and the diff feature highlights the changes between two revisions. Using the revision history, an editor can view and restore a previous version of the article. This gives great power to the author to eliminate edits. The diff feature can be used to decide whether or not this is necessary. A regular wiki user can view the diff of an edit listed on the "Recent Changes" page and, if it is an unacceptable edit, consult the history, restoring a previous revision; this process is more or less streamlined, depending on the wiki software used.[22]

In case unacceptable edits are missed on the "recent changes" page, some wiki engines provide additional content control. It can be monitored to ensure that a page, or a set of pages, keeps its quality. A person willing to maintain pages will be warned of modifications to the pages, allowing them to verify the validity of new editions quickly. This can be seen as a very pro-author and anti-editor feature.[23] A watchlist is a common implementation of this. Some wikis also implement "patrolled revisions", in which editors with the requisite credentials can mark some edits as not vandalism. A "flagged revisions" system can prevent edits from going live until they have been reviewed.[24]

Trustworthiness and reliability of content

Quality dimensions of the wiki and other sources: Wikipedia use case[25]
Critics of publicly editable wiki systems argue that these systems could be easily tampered with by malicious individuals ("vandals") or even by well-meaning but unskilled users who introduce errors into the content. While proponents argue that the community of users can catch malicious content and correct it.[1] Lars Aronsson, a data systems specialist, summarizes the controversy as follows: "Most people, when they first learn about the wiki concept, assume that a Web site that can be edited by anybody would soon be rendered useless by destructive input. It sounds like offering free spray cans next to a grey concrete wall. The only likely outcome would be ugly graffiti and simple tagging, and many artistic efforts would not be long lived. Still, it seems to work very well."[12] High editorial standards in medicine and health sciences articles, in which users typically use peer-reviewed journals or university textbooks as sources, have led to the idea of expert-moderated wikis.[26] Some wikis allow one to link to specific versions of articles, which has been useful to the scientific community, in that expert peer reviewers could analyse articles, improve them and provide links to the trusted version of that article.[27] Noveck points out that "participants are accredited by members of the wiki community, who have a vested interest in preserving the quality of the work product, on the basis of their ongoing participation." On controversial topics that have been subject to disruptive editing, a wiki author may restrict editing to registered users.[28]

Security
"Edit war" redirects here. For Wikipedia's policy on edit warring, see Wikipedia:Edit warring.
"Edit war" redirects here. It is not to be confused with Edit conflict.
The open philosophy of wiki – allowing anyone to edit content – does not ensure that every editor's intentions are well-mannered. For example, vandalism (changing wiki content to something offensive, adding nonsense, or deliberately adding incorrect information, such as hoax information) can be a major problem. On larger wiki sites, such as those run by the Wikimedia Foundation, vandalism can go unnoticed for some period of time. Wikis, because of their open nature, are susceptible to intentional disruption, known as "trolling". Wikis tend to take a soft-security approach to the problem of vandalism, making damage easy to undo rather than attempting to prevent damage. Larger wikis often employ sophisticated methods, such as bots that automatically identify and revert vandalism and JavaScript enhancements that show characters that have been added in each edit. In this way, vandalism can be limited to just "minor vandalism" or "sneaky vandalism", where the characters added/eliminated are so few that bots do not identify them and users do not pay much attention to them.[29][unreliable source] An example of a bot that reverts vandalism on Wikipedia is ClueBot NG. ClueBot NG can revert edits, often within minutes, if not seconds. The bot uses machine learning in lieu of heuristics.[30]

The amount of vandalism a wiki receives depends on how open the wiki is. For instance, some wikis allow unregistered users, identified by their IP addresses, to edit content, while others limit this function to just registered users. Most wikis allow anonymous editing without an account,[31] but give registered users additional editing functions; on most wikis, becoming a registered user is a short and simple process. Some wikis require an additional waiting period before gaining access to certain tools. For example, on the English Wikipedia, registered users can rename pages only if their account is at least four days old and has made at least ten edits. Other wikis such as the Portuguese Wikipedia use an editing requirement instead of a time requirement, granting extra tools after the user has made a certain number of edits to prove their trustworthiness and usefulness as an editor. Vandalism of Wikipedia is common (though policed and usually reverted) because it is extremely open, allowing anyone with a computer and Internet access to edit it, although this makes it grow rapidly. In contrast, Citizendium requires an editor's real name and short autobiography, affecting the growth of the wiki but sometimes helping stop vandalism.

Edit wars can also occur as users repetitively revert a page to the version they favor. In some cases, editors with opposing views of which content should appear or what formatting style should be used will change and re-change each other's edits. This results in the page being "unstable" from a general users' perspective, because each time a general user comes to the page, it may look different. Some wiki software allows an administrator to stop such edit wars by locking a page from further editing until a decision has been made on what version of the page would be most appropriate.[9] Some wikis are in a better position than others to control behavior due to governance structures existing outside the wiki. For instance, a college teacher can create incentives for students to behave themselves on a class wiki they administer by limiting editing to logged-in users and pointing out that all contributions can be traced back to the contributors. Bad behavior can then be dealt with in accordance with university policies.[11] The issue of wiki vandalism is debated. In some cases, when an editor deletes an entire article and replaces it with nonsense content, it may be a "test edit", made by the user as she or he is experimenting with the wiki system. Some editors may not realize that they have damaged the page, or if they do realize it, they may not know how to undo the mistake or restore the content.

Potential malware vector
Malware can also be a problem for wikis, as users can add links to sites hosting malicious code. For example, a German Wikipedia article about the Blaster Worm was edited to include a hyperlink to a malicious website. Users of vulnerable Microsoft Windows systems who followed the link would be infected.[9] A countermeasure is the use of software that prevents users from saving an edit that contains a link to a site listed on a blacklist of malicious sites.[32]

Communities
Applications

The home page of the English Wikipedia
The English Wikipedia has the largest user base among wikis on the World Wide Web[33] and ranks in the top 10 among all Web sites in terms of traffic.[34] Other large wikis include the WikiWikiWeb, Memory Alpha, Wikivoyage, and Susning.nu, a Swedish-language knowledge base. Medical and health-related wiki examples include Ganfyd, an online collaborative medical reference that is edited by medical professionals and invited non-medical experts.[10] Many wiki communities are private, particularly within enterprises. They are often used as internal documentation for in-house systems and applications. Some companies use wikis to allow customers to help produce software documentation.[35] A study of corporate wiki users found that they could be divided into "synthesizers" and "adders" of content. Synthesizers' frequency of contribution was affected more by their impact on other wiki users, while adders' contribution frequency was affected more by being able to accomplish their immediate work.[36] From a study of 1000s of wiki deployments, Jonathan Grudin concluded careful stakeholder analysis and education are crucial to successful wiki deployment.[37]

In 2005, the Gartner Group, noting the increasing popularity of wikis, estimated that they would become mainstream collaboration tools in at least 50% of companies by 2009.[38][needs update] Wikis can be used for project management.[39][40][unreliable source] Wikis have also been used in the academic community for sharing and dissemination of information across institutional and international boundaries.[41] In those settings, they have been found useful for collaboration on grant writing, strategic planning, departmental documentation, and committee work.[42] In the mid-2000s (decade), the increasing trend among industries toward collaboration was placing a heavier impetus upon educators to make students proficient in collaborative work, inspiring even greater interest in wikis being used in the classroom.[9]

Wikis have found some use within the legal profession, and within government. Examples include the Central Intelligence Agency's Intellipedia, designed to share and collect intelligence, dKospedia, which was used by the American Civil Liberties Union to assist with review of documents pertaining to internment of detainees in Guantánamo Bay;[43] and the wiki of the United States Court of Appeals for the Seventh Circuit, used to post court rules and allow practitioners to comment and ask questions. The United States Patent and Trademark Office operates Peer-to-Patent, a wiki to allow the public to collaborate on finding prior art relevant to examination of pending patent applications. Queens, New York has used a wiki to allow citizens to collaborate on the design and planning of a local park. Cornell Law School founded a wiki-based legal dictionary called Wex, whose growth has been hampered by restrictions on who can edit.[28]

In academic context, wiki has also been used as project collaboration and research support system.[44][45]

City wikis
A city wiki (or local wiki) is a wiki used as a knowledge base and social network for a specific geographical locale.[46][47][48] The term 'city wiki' or its foreign language equivalent (e.g. German 'Stadtwiki') is sometimes also used for wikis that cover not just a city, but a small town or an entire region. A city wiki contains information about specific instances of things, ideas, people and places. Much of this information might not be appropriate for encyclopedias such as Wikipedia (e.g., articles on every retail outlet in a town), but might be appropriate for a wiki with more localized content and viewers. A city wiki could also contain information about the following subjects, that may or may not be appropriate for a general knowledge wiki, such as:

Details of public establishments such as public houses, bars, accommodation or social centers
Owner name, opening hours and statistics for a specific shop
Statistical information about a specific road in a city
Flavors of ice cream served at a local ice cream parlor
A biography of a local mayor and other persons
WikiNodes
"WikiNode" redirects here. For WikiNode of Wikipedia, see Wikipedia:WikiNode. For the app for the Apple iPad, see WikiNodes.
File:Development of "Mathe für Nicht-Freaks" from Sep 2009 to June 2016.webm
Visualization of the collaborative work in the German wiki project Mathe für Nicht-Freaks
WikiNodes are pages on wikis that describe related wikis. They are usually organized as neighbors and delegates. A neighbor wiki is simply a wiki that may discuss similar content or may otherwise be of interest. A delegate wiki is a wiki that agrees to have certain content delegated to that wiki.[49] One way of finding a wiki on a specific subject is to follow the wiki-node network from wiki to wiki; another is to take a Wiki "bus tour", for example: Wikipedia's Tour Bus Stop.

Participants
The four basic types of users who participate in wikis are reader, author, wiki administrator and system administrator. The system administrator is responsible for installation and maintenance of the wiki engine and the container web server. The wiki administrator maintains wiki content and is provided additional functions pertaining to pages (e.g. page protection and deletion), and can adjust users' access rights by, for instance, blocking them from editing.[50]

Growth factors
A study of several hundred wikis showed that a relatively high number of administrators for a given content size is likely to reduce growth;[51] that access controls restricting editing to registered users tends to reduce growth; that a lack of such access controls tends to fuel new user registration; and that higher administration ratios (i.e. admins/user) have no significant effect on content or population growth.[52]

Conferences
Active conferences and meetings about wiki-related topics include:

Atlassian Summit, an annual conference for users of Atlassian software, including Confluence.[53]
OpenSym (called WikiSym until 2014), an academic conference dedicated to research about wikis and open collaboration.
SMWCon, a bi-annual conference for users and developers of Semantic MediaWiki.[54]
TikiFest, a frequently held meeting for users and developers of Tiki Wiki CMS Groupware.[55]
Wikimania, an annual conference dedicated to the research and practice of Wikimedia Foundation projects like Wikipedia.
Former wiki-related events include:

RecentChangesCamp (2006–2012), an unconference on wiki-related topics.
RegioWikiCamp (2009–2013), a semi-annual unconference on "regiowikis", or wikis on cities and other geographic areas.[56]
Rules
Wikis typically have a set of rules governing user behavior. Wikipedia, for instance, has an extensive set of policies and guidelines summed up in its five pillars: Wikipedia is an encyclopedia; Wikipedia has a neutral point of view; Wikipedia is free content; Wikipedians should interact in a respectful and civil manner; and Wikipedia does not have firm rules. Many wikis have adopted a set of commandments. For instance, Conservapedia commands, among other things, that its editors use "B.C." rather than "B.C.E." when referring to years prior to C.E. 1 and refrain from "unproductive activity."[57] One teacher instituted a commandment for a class wiki, "Wiki unto others as you would have them wiki unto you."[11]

Legal environment
Joint authorship of articles, in which different users participate in correcting, editing, and compiling the finished product, can also cause editors to become tenants in common of the copyright, making it impossible to republish without permission of all co-owners, some of whose identities may be unknown due to pseudonymous or anonymous editing.[9] Where persons contribute to a collective work such as an encyclopedia, there is, however, no joint ownership if the contributions are separate and distinguishable.[58] Despite most wikis' tracking of individual contributions, the action of contributing to a wiki page is still arguably one of jointly correcting, editing, or compiling, which would give rise to joint ownership. Some copyright issues can be alleviated through the use of an open content license. Version 2 of the GNU Free Documentation License includes a specific provision for wiki relicensing; Creative Commons licenses are also popular. When no license is specified, an implied license to read and add content to a wiki may be deemed to exist on the grounds of business necessity and the inherent nature of a wiki, although the legal basis for such an implied license may not exist in all circumstances.[citation needed]

Wikis and their users can be held liable for certain activities that occur on the wiki. If a wiki owner displays indifference and forgoes controls (such as banning copyright infringers) that he could have exercised to stop copyright infringement, he may be deemed to have authorized infringement, especially if the wiki is primarily used to infringe copyrights or obtains direct financial benefit, such as advertising revenue, from infringing activities.[9] In the United States, wikis may benefit from Section 230 of the Communications Decency Act, which protects sites that engage in "Good Samaritan" policing of harmful material, with no requirement on the quality or quantity of such self-policing.[59] It has also been argued, however, that a wiki's enforcement of certain rules, such as anti-bias, verifiability, reliable sourcing, and no-original-research policies, could pose legal risks.[60] When defamation occurs on a wiki, theoretically all users of the wiki can be held liable, because any of them had the ability to remove or amend the defamatory material from the "publication." It remains to be seen whether wikis will be regarded as more akin to an internet service provider, which is generally not held liable due to its lack of control over publications' contents, than a publisher.[9] It has been recommended that trademark owners monitor what information is presented about their trademarks on wikis, since courts may use such content as evidence pertaining to public perceptions. Joshua Jarvis notes, "Once misinformation is identified, the trade mark owner can simply edit the entry."[61]

See also
icon	Internet portal
Comparison of wiki software
Content management system
CURIE
Dispersed knowledge

    </div>
  );
}

export default Home;
