
import React, { Component } from "react";

class ChatPage extends Component {
    render() {
        return (
            <div id="contentchat" className="card">
                <div className="card-body">
                    <h3 className="card-title"> How to Become a Programmer!</h3>
                    <p>This guide does not promise to give a magically way to becoming a programmer,
                       but you will get a general outline.</p>
                    <ol>
                        <li>
                        <h4> Why do you want to learn programming? </h4>
                        <p> The first and one of the most important steps on how to become a programmer is identifying your reasons for starting.
                            Do you want to turn it into a career? Do you have a project or concept that you want to turn into a reality on your own?
                            Or do you simply want to learn how to be a programmer because it’s something that’s ‘cool’ at the moment?
                            Answer honestly, because the language that you choose to learn will depend on your answer to this question. </p>
                        </li>

                        <li>
                        <h4> Decide What Field You Want To Go Into </h4>
                        <p> There are a variety of different types of programming. When you are figuring out how to learn programming,
                            you need to think very carefully about what field you are planning on looking for work in.
                            Some of the most popular types of programmers include: Web developers, Software programmers, Data scientists,
                            Database Administrator, Mobile app development. </p>
                        </li>
                        <li>
                        <h4> Learn A Programming Language </h4>
                        <p> Once you have settled on a programming field, you need to learn the languages that are relevant to that field.
                            For example, you will need SQL to become a database administrator, CSS, and JavaScript to become a front-end web developer,
                            and something like Java or Swift if you want to start building mobile apps. </p>
                        </li>
                        <li>
                        <h4> Practice, Practice & Practice Some More </h4>
                        <p> So you want to know how to become a programmer right? Well, here’s a little secret for you:
                            You have to practice. You have to practice a lot! </p>
                        </li>
                        <li>
                        <h4> Start Building A Portfolio Of Work </h4>
                        <p> While you are practicing, you need to start building a portfolio.
                            Want to know how to become a computer programmer?
                            Well, one of the keys is having a decent portfolio that you can show to prospective employers.
                            When you go to apply for a job as an entry-level programmer,
                            remember that there are probably at least a few other people who are applying for the same job.
                            You need to do something that makes you stand out above and ahead of the crowd.
                            A portfolio is a great way to do this. </p>
                        </li>
                        <li>
                        <h4> Apply For Jobs </h4>
                        <p> By now you’re well on the way to learning how to be a good programmer.
                            You have picked a programming field, you have started to learn the skills and programming languages that you will need,
                            and you have started practicing writing your code. You have put together a portfolio that showcases all of your work,
                            and you have (hopefully) crafted a new resume.
                        </p>
                        </li>
                        <li>
                        <h4> Never Stop Learning! </h4>
                        <p> As you can imagine, programming is a rapidly developing field.
                            Learning how to become a programmer today won’t necessarily give you the skills that you need to remain
                            a good programmer for the next few decades. You need to keep learning new skills and new languages.
                        </p>
                        </li>
                    </ol>
                    <ul>
                        <li><a href="https://www.bitdegree.org/tutorials/how-to-become-a-programmer/">
                            how-to-become-a-programmer</a></li>
                        <li><a href="https://www.wikihow.com/Become-a-Programmer">
                            Become-a-Programmer</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ChatPage;