import bulma from "@/assets/css/bulma.module.css";
import classes from "./Menu.module.css";

export default function Menu(props) {
  return (
    <div class={classes.container}>
      <div class={bulma.menu}>
        <p class={bulma["menu-label"]}>工具和示例</p>
        <ul class={bulma["menu-list"]}>
          <li>
            <p class={bulma["menu-label"]}>
              特效示例
                </p>
            <ul>
              <li>
                <p class={bulma["menu-label"]}>音频可视化</p>
                <ul>
                  <li>
                    <a onClick={()=> props.handler("/htmls/音频可视化.html")}>绿色折线样式</a>
                  </li>
                  <li>
                    <a onClick={()=> props.handler("/htmls/音频可视化-条形.html")}>橙黄条样式</a>
                  </li>
                </ul>
                <p class={bulma["menu-label"]}>充电特效</p>
                <ul>
                  <li>
                    <a onClick={()=> props.handler("/htmls/battery.html")}>样式1</a>
                  </li>
                  <li>
                    <a onClick={()=> props.handler("/htmls/battery2.html")}>样式2</a>
                  </li>
                </ul>
                <p class={bulma["menu-label"]}>轮播图</p>
                <ul>
                  <li>
                    <a onClick={()=> props.handler("/htmls/splitSwiper.html")}>3D 立方体切割轮播图</a>
                  </li>
                  <li>
                    <a onClick={()=> props.handler("/htmls/cssImagesSwitchBoomEffect.html")}>爆炸轮播图</a>
                  </li>
                </ul>
              </li>
              <li>
                <a onClick={()=> props.handler("/htmls/多面体.html")}>3D 多面体</a>
              </li>
              <li>
                <a onClick={()=> props.handler("/htmls/立体字.html")}>3D 文字(偶然做成的效果 很卡)</a>
              </li>
              <li>
                <a onClick={()=> props.handler("/htmls/parcitleLine.html")}>粒子连线</a>
              </li>
              <li>
                <a onClick={()=> props.handler("/htmls/css旋涡.html")}>旋涡(偶然形成的效果 很卡)</a>
              </li>
            </ul>
          </li>
          <li>
            <p class={bulma["menu-label"]}>
              其他工具
                </p>
            <ul>
              <li>
                <a onClick={()=> props.handler("/htmls/computeSingleSongACC.html")}>计算单曲ACC</a>
              </li>
            </ul>
          </li>
          <li>
            <p class={bulma["menu-label"]}>其他示例</p>
            <ul>
              <li>
                <a onClick={()=> props.handler("/htmls/瀑布布局.html")}>瀑布流布局</a>
              </li>
              <li>
                <a onClick={()=> props.handler("/htmls/瀑布布局flex.html")}>flex 瀑布流布局</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}