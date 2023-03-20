import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';
import {BrowserRouter, Link} from "react-router-dom";
import DocumentMeta from 'react-document-meta';
import AudioRecorder from "./AudioRecorder";
import Amplify, { API } from 'aws-amplify';


class ShineAI extends React.Component {
  constructor(props) {
    super(props);
    this.demoSection = React.createRef();
    this.scrollToDemo = this.scrollToDemo.bind(this);
    this.state = {
      demoStarted: false,
      messages: [
        "Dr. Lee",
        "Hi, I'm Dr. Lee. What brings you here today?",
        "Me",
        "Hi, Dr. Lee. I'm having some trouble sleeping and focusing lately. I'm not sure if it's because of the stress of my job or if it's something else.",
        "Dr. Lee",
        "I see. How long have you been having trouble sleeping?",
        "Me",
        "It's been about a month now. I've tried taking melatonin and other sleep aids, but they don't seem to work.",
        "Dr. Lee",
        "I'm sorry to hear that. Can you tell me more about your diet and exercise habits?",
        "Me",
        "I've tried meditation and working out whenever I can, but it doesn't seem to help. I'm eating normally for the most part, although I sometimes overeat.",
        "Dr. Lee",
        "Hmm, is this your first time seeing a behavioral therapist? And have you noticed any new patterns in your lifestyle lately?",
        "Me",
        "Yes, it's my first time here. I've just been feeling a little more tired than usual. I've also been feeling a little more anxious than usual.",
        "Dr. Lee",
        "Okay. Anything else about your medical history that you'd like to add?",
      ],
      animatedMessages:[],
      animationDelay: 0.1,
      animationInProgress: true,
      animationComplete: false,
      showFastForward: false,
      consultNotes: [
        "The patient reports having trouble sleeping and focusing for about a month. They have tried melatonin and other sleep aids without success. They have also tried meditation and exercise, but these have not helped. They report eating normally but occasionally overeating. The patient feels more tired and anxious than usual.",
        "This is the patient's first time seeing a behavioral therapist. No other objective data is provided during the conversation.",
        "The patient is experiencing difficulty sleeping and focusing, which may be due to stress, anxiety, or other factors. Their attempts to self-treat with melatonin, sleep aids, meditation, and exercise have not been effective.",
        "The patient should undergo a thorough evaluation to determine the root cause of their sleep and focus issues. Further assessment of their mental health, lifestyle, and potential stressors is necessary. Based on the evaluation, the therapist should develop an appropriate treatment plan to address the patient's concerns.",
      ],
    }
  }

  componentDidMount() {
    this.cycleHeaders();
  }

  scrollToBottom(element) {
    const container = document.querySelector('.shine-element-content-container');
    const rect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    if (rect.bottom > containerRect.bottom) {
      container.scrollTop += rect.bottom - containerRect.bottom;
    }
  }
  
  

  cycleHeaders() {
    const texts = document.querySelectorAll(".shine-cta-header");
    let currentIndex = 0;
  
    function showNextText() {
      texts[currentIndex].classList.remove("visible");
      currentIndex = (currentIndex + 1) % texts.length;
      texts[currentIndex].classList.add("visible");
  
      setTimeout(showNextText, 5000); // Change text every 3 seconds
    }
  
    // Start the text cycling
    texts[currentIndex].classList.add("visible");
    setTimeout(showNextText, 5000);
  }

  animateWords(animation_speed) {
    this.setState({ demoStarted: true });
    const { messages } = this.state;
    let delay = 0;
    let animatedMessages = [];

    messages.forEach((message) => {
      const words = message.split(' ');
      const animatedWords = words.map((word, index) => {
        delay += animation_speed;
        return { word, delay };
      });
      animatedMessages.push(animatedWords);
    });
    if(!this.state.animationComplete) {
      this.setState({ animatedMessages }, () => {
        const messageElements = document.querySelectorAll('.user-message');
    
        // Set animationInProgress to true when the first word of the first message starts animating
        messageElements[0].children[0].addEventListener('animationstart', () => {
          this.setState({ animationInProgress: true });
        });

        messageElements[2].children[0].addEventListener('animationstart', () => {
          this.setState({ showFastForward: true });
        });
    
        messageElements.forEach((message, messageIndex) => {
          const words = message.children;
          const firstWord = words[0];
    
          // Add scroll event listener
          // firstWord.addEventListener('animationstart', () => {
          //   message.scrollIntoView({ behavior: 'smooth', block: 'end' });
          // });
          words[words.length - 1].addEventListener('animationstart', () => this.scrollToBottom(words[words.length - 1]));
    
          // Set animationComplete to true when the last word of the last message finishes animating
          if (messageIndex === messageElements.length - 1) {
            const lastWord = words[words.length - 1];
            lastWord.addEventListener('animationend', () => {
              this.setState({ animationComplete: true, animationInProgress: false, showFastForward: false });
            });
          }
        });
      });
    }
  }

  showNotes = async () => {
    if(this.state.userRecorded) {
      this.setState({ generateLoading: true });
      let subjective = "Subjective: " + this.state.consultNotes[0]
      let objective = "Objective: " + this.state.consultNotes[1]
      let assessment = "Assessment: " + this.state.consultNotes[2]
      let plan = "Plan: " + this.state.consultNotes[3]
      let prompt = "Here is the JSON stringified version of SOAP notes, where each element is the S,O,A,P note respectively: " + JSON.stringify(this.state.consultNotes) + "Adjust the notes with the following additional quote from the patient, and return your response in the same stringified json format as the initial notes: " + this.state.userTranscript
      console.log("prompt ", prompt)
      const requestBody = {
        prompt: prompt,
        max_tokens: 2048,
        model: "text-davinci-003",
      };
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          "Authorization": 'Bearer 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',
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      if(response.ok) {
        const data = await response.json();
        console.log("Data: ", data['choices'][0]['text']);
        this.setState({ showNotes: true, consultNotes: JSON.parse(data['choices'][0]['text']), generateLoading: false });
      }
    }
    else {
      this.setState({ showNotes: true, generateLoading: false });
    }
  }

  scrollToDemo() {
    const screenWidth = window.innerWidth; // Get the browser window width

    if (screenWidth < 1000) {
      this.demoSection.current.scrollIntoView({ behavior: "smooth" });
    } else {
      const yOffset = window.innerHeight * 0.8 - 100; // Calculate 80% of the browser height - 100px
      const y = window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  updateTranscript = (transcript) => {
    let messages = this.state.messages;
    messages.push("Me");
    messages.push(transcript);
    console.log(transcript);
    this.setState({ userTranscript: transcript, messages: messages, replyComplete: true, userRecorded: true})
  }
  

  render() {
    const meta = {
      title: 'Beam Health - Shine AI',
      description: 'Your reliable healthtech copilot..',
      canonical: 'http://beam.health/shineai',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'react,meta,document,html,tags'
        }
      }
    }
    const { demoStarted, animatedMessages } = this.state;
    return (
      <div>
        <DocumentMeta {...meta} />
        <div className="shine-ai-parent-container">
          <div className="hero-bg"></div>
          <div className="shine-ai-hero-container">
            <h1>&#9889;</h1>
            <h2>Introducing Shine AI - your next-generation assistant</h2>
            <h1 className="shine-cta-header">Learned from over 10,000 hours of medical consults</h1>
            <h1 className="shine-cta-header">Generates clinical notes within seconds</h1>
            <h1 className="shine-cta-header">Customized to your unique style and voice</h1>
            <h1 className="shine-cta-header">One-click EHR Integration you can trust</h1>
            <h1 className="shine-cta-header">Needs no engineering investment from customers</h1>
            <div className="cta-button-action" onClick={this.scrollToDemo}>Give it a Try</div>
            {/* <img src="https://cdn.discordapp.com/attachments/1058604767468851294/1086328010849910855/Screen_Shot_2023-03-17_at_12.39.24_PM.png" />
            <img src="https://cdn.discordapp.com/attachments/1058604767468851294/1086328010849910855/Screen_Shot_2023-03-17_at_12.39.24_PM.png" />
            <img src="https://cdn.discordapp.com/attachments/1058604767468851294/1086328010849910855/Screen_Shot_2023-03-17_at_12.39.24_PM.png" /> */}
          </div>
          <div className="shine-ai-features-container">
            <div>The New Standard for Care</div>
            <div>
              <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                <i className="fas fa-globe"></i>
                <span>Multi-lingual & support for over 95 languages, including Spanish, Mandarin, and Hindi</span>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                <i class="fas fa-plane-departure"></i>
                <span>Ready to go with no additional engineering investment from customers</span>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                <i class="fas fa-seedling"></i>
                <span>Seamlessly roll out new care strategies, billing initiatives</span>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                <i className="fas fa-user-md"></i>
                <span ref={this.demoSection}>More time focused on patients and less time on administrative note-taking</span>
              </AnimationOnScroll>
            </div>
          </div>
          <AnimationOnScroll className="shine-ai-main-container" animateIn="animate__fadeIn" afterAnimatedIn={() => this.animateWords(0.1)}>
            <div className="shine-element-parent">
              {!this.state.showNotes ?
              <div className="shine-element-content-container">
                {this.state.animationInProgress &&
                <div className="transcription-label"><i className="fas fa-circle"></i> Transcription in Progress</div>
                }
                {demoStarted && animatedMessages.map((message, messageIndex) => (
                  <div>
                    <div key={messageIndex} className={messageIndex%4 == 0 ? 'user-doctor' : messageIndex%2 == 0 ? 'user-patient' : 'user-message'}>
                      {message.map(({ word, delay }, wordIndex) => (
                        <span key={wordIndex} className="animate-word" style={{ animationDelay: `${delay}s` }}>
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                {this.state.userTranscript &&
                <div>
                  <div className='user-patient'>
                    <span className="animate-word">Me</span>
                  </div>
                </div>
                }
                {this.state.userTranscript &&
                <div>
                  <div className='user-message'>
                    <span className="animate-word">{this.state.userTranscript}</span>
                  </div>
                </div>
                }
              </div>
              :
              <div className="shine-element-content-container-notes">
                <div>
                  <div className="shine-element-soap-label">Subjective</div>
                  <div>{this.state.consultNotes[0]}</div>
                </div>
                <div>
                  <div className="shine-element-soap-label">Objective</div>
                  <div>{this.state.consultNotes[1]}</div>
                </div>
                <div>
                  <div className="shine-element-soap-label">Assessment</div>
                  <div>{this.state.consultNotes[2]}</div>
                </div>
                <div>
                  <div className="shine-element-soap-label">Plan</div>
                  <div>{this.state.consultNotes[3]}</div>
                </div>
              </div>
              }
              {!this.state.showNotes &&
              <div className="shine-element-options-container">
                {this.state.showFastForward &&
                <div onClick={() => this.animateWords(0.02)}><i className="fas fa-fast-forward"></i> Fast Forward</div>
                }
                {this.state.animationComplete && !this.state.replyComplete &&
                <AudioRecorder onTranscription={(transcript) => this.updateTranscript(transcript)} />
                // <div><i className="fas fa-microphone"></i> Reply to Doctor Lee yourself</div>
                }
                {this.state.animationComplete && !this.state.replyComplete &&
                <span onClick={() => this.setState({replyComplete: true})}>Skip replying</span>
                }
                {this.state.replyComplete && !this.state.generateLoading &&
                <div onClick={() => this.showNotes()}><i className="fas fa-notes-medical"></i> Generate Notes</div>
                }
                {this.state.generateLoading &&
                <span className="note-generate-loading-message">Thanks for the additional information. I'm generating your notes now.</span>
                }
              </div>
              }
            </div>
          </AnimationOnScroll>
        </div>
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
          <div className='demo-container' id="schedule-demo">
            <h1 style={{color:'#ffffff'}}>Book Demo</h1>
            <iframe src="https://meetings.hubspot.com/beam/platform-demo?embed=true" width="100%" style={{height: "756px", border: "none"}}></iframe>
          </div>
        </AnimationOnScroll>
      </div>
    );
  }
}

export default ShineAI;
