import GoogleIcons from "./GoogleIcons";
import Menu from "./Menu";

function GoogleAppsMenu() {
  return (
    <Menu type="google">
      <div className="w-[300px]">
        <div className="grid grid-cols-3 gap-10 rounded-2xl bg-gray-100 px-10 py-5">
          <GoogleIcons
            imgSrc="img/square-passport.png"
            style={{ borderRadius: "50%" }}
          >
            Accounts
          </GoogleIcons>
          <GoogleIcons imgSrc="img/drive.png">Drive</GoogleIcons>
          <GoogleIcons imgSrc="img/mybusiness.png">Business...</GoogleIcons>
          <GoogleIcons imgSrc="img/gmail.png">Gmail</GoogleIcons>
          <GoogleIcons imgSrc="img/youtube.png">Youtube</GoogleIcons>
          <GoogleIcons imgSrc="img/gemini.png">Gemini</GoogleIcons>
          <GoogleIcons imgSrc="img/maps.png">Maps</GoogleIcons>
          <GoogleIcons imgSrc="img/google.png">Search</GoogleIcons>
          <GoogleIcons imgSrc="img/calendar.png">Calendar</GoogleIcons>
          <GoogleIcons imgSrc="img/news.png">News</GoogleIcons>
          <GoogleIcons imgSrc="img/photos.png">Photos</GoogleIcons>
          <GoogleIcons imgSrc="img/meet.png">Meet</GoogleIcons>{" "}
          <GoogleIcons imgSrc="img/translate.png">Translate</GoogleIcons>{" "}
          <GoogleIcons imgSrc="img/sheet.png">Sheet</GoogleIcons>{" "}
          <GoogleIcons imgSrc="img/docs.png">Docs</GoogleIcons>
          <GoogleIcons imgSrc="img/slide.png">Slides</GoogleIcons>
          <GoogleIcons imgSrc="img/one.png">One</GoogleIcons>
        </div>
        <div className="flex items-center justify-center py-4">
          <button className="cursor-pointer rounded-2xl border-[1px] border-gray-400 px-5 py-2 text-sm text-blue-500 hover:bg-gray-100">
            More from Google
          </button>
        </div>
      </div>
    </Menu>
  );
}

export default GoogleAppsMenu;
