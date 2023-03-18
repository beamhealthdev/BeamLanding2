import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';
import {BrowserRouter, Link} from "react-router-dom";
import DocumentMeta from 'react-document-meta';
import AudioRecorder from "./AudioRecorder";


class ShineAI extends React.Component {
  constructor(props) {
    super(props);
    this.demoSection = React.createRef();
    this.scrollToDemo = this.scrollToDemo.bind(this);
    this.state = {
      demoStarted: false,
      messages: [
        "Dr. Lee",
        "Hi, I'm Dr. Lee. I'm a board-certified physician and I'm here to help you with your concerns.",
        "Me",
        "Hi, Dr. Lee. I'm having some trouble sleeping lately. I'm not sure if it's because of the stress of my job or if it's something else.",
        "Dr. Lee",
        "I see. How long have you been having trouble sleeping?",
        "Me",
        "It's been about a month now. I've tried taking melatonin and other sleep aids, but they don't seem to work.",
        "Dr. Lee",
        "I'm sorry to hear that. Have you tried any other methods to help you sleep?",
        "Me",
        "I've tried meditation, but it doesn't seem to help. I've also tried taking a warm bath before bed, but that doesn't seem to help either.",
        "Dr. Lee",
        "Have you noticed any new patterns in your lifestyle lately?",
        "Me",
        "I've been feeling a little more tired than usual. I've also been feeling a little more anxious than usual.",
        "Dr. Lee",
        "Any other noticeable changes?",
        "Me",
        "Not that I can think of.",
        "Dr. Lee",
        "Okay. Anything else about your medical history that you'd like to add?",
      ],
      animatedMessages:[],
      animationDelay: 0.1,
      animationInProgress: true,
      animationComplete: false,
      showFastForward: false,
      consultNotes: [
        "Patient reports having trouble sleeping for about a month. They have tried melatonin, sleep aids, meditation, and taking a warm bath before bed without success. The patient also mentions feeling more tired and anxious than usual.",
        "The patient is experiencing insomnia, fatigue, and increased anxiety. No other significant changes in lifestyle or medical history were reported.",
        "The patient is likely suffering from insomnia, potentially related to stress from their job. The increased anxiety and fatigue may be contributing factors to the sleep disturbance.",
        "Recommend the patient to maintain a consistent sleep schedule and create a relaxing bedtime routine. Encourage the patient to exercise regularly and to avoid caffeine and alcohol before bed. If the patient's symptoms persist, recommend they seek professional help.",
      ],
    }
  }

  componentDidMount() {
    this.cycleHeaders();
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

  showNotes = () => {
    this.setState({ showNotes: true });
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
  

  render() {
    const meta = {
      title: 'Beam Health - Shine AI',
      description: 'Your reliable healthtech copilot..',
      canonical: 'http://beam.health/shine-ai',
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
              </div>
              :
              <div className="shine-element-content-container-notes">
                <AnimationOnScroll animateIn="animate__fadeIn animate__fastest" animationDelay={100}>
                  <div className="shine-element-soap-label">Subjective</div>
                  <div>{this.state.consultNotes[0]}</div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn" animationDelay={400}>
                  <div className="shine-element-soap-label">Objective</div>
                  <div>{this.state.consultNotes[1]}</div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn" animationDelay={700}>
                  <div className="shine-element-soap-label">Assessment</div>
                  <div>{this.state.consultNotes[2]}</div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn" animationDelay={1000}>
                  <div className="shine-element-soap-label">Plan</div>
                  <div>{this.state.consultNotes[3]}</div>
                </AnimationOnScroll>
              </div>
              }
              {!this.state.showNotes &&
              <div className="shine-element-options-container">
                {this.state.showFastForward &&
                <div onClick={() => this.animateWords(0.02)}><i className="fas fa-fast-forward"></i> Fast Forward</div>
                }
                {this.state.animationComplete && !this.state.replyComplete &&
                <AudioRecorder />
                // <div><i className="fas fa-microphone"></i> Reply to Doctor Lee yourself</div>
                }
                {this.state.animationComplete && !this.state.replyComplete &&
                <span onClick={() => this.setState({replyComplete: true})}>Skip replying</span>
                }
                {this.state.replyComplete &&
                <div onClick={() => this.showNotes()}>Generate Notes</div>
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
