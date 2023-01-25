import { MemeInterface, ImageInterface } from "orsys-tjs-meme";
import { number } from "prop-types";
import { stringify } from "querystring";
import React, { useEffect, useState } from "react";
import Button from "../../ui/Buttonts/Button";
import style from "./MemeForm.module.css";

//types
interface IMemeFormProps {
  meme: MemeInterface;
  onValueChange: Function;
}

const MemeForm: React.FC<IMemeFormProps> = (props) => {
  /*  const editInputChangeGen = (key: string, value: string | number) => {
    const newMeme = { ...props.meme };
    newMeme[key] = value;
    props.onValueChange({ ...props.meme, key: newMeme });
  };*/
  return (
    <div data-testid="MemeForm" className={style.MemeForm}>
      <form>
        <h1>Titre</h1>
        <input
          type="text"
          id="f_titre"
          placeholder="saisir titre"
          value={props.meme.titre}
          onChange={(evt) => {
            console.log(evt.target.value);
            props.onValueChange({ ...props.meme, titre: evt.target.value });
          }}
        />
        <hr />
        <h2>Image</h2>
        <select>
          <option value="-1">Aucune</option>
        </select>
        <hr />
        <h2>text</h2>
        <input
          type="text"
          value={props.meme.text}
          onChange={(evt) => {
            console.log(evt.target.value);
            props.onValueChange({ ...props.meme, text: evt.target.value });
          }}
        />
        <div className={style.half}>
          <div>
            <label htmlFor="f_x">x:</label>
            <br />
            <input
              type="number"
              className={style.smallInput}
              value={props.meme.x}
              onChange={(evt) => {
                console.log(evt.target.value);
                props.onValueChange({
                  ...props.meme,
                  x: Number(evt.target.value),
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="f_y">y:</label>
            <br />
            <input
              type="number"
              className={style.smallInput}
              value={props.meme.y}
              onChange={(evt) => {
                console.log(evt.target.value);
                props.onValueChange({
                  ...props.meme,
                  y: Number(evt.target.value),
                });
              }}
            />
          </div>
        </div>
        <hr />
        <label htmlFor="f_color">Couleur</label>
        <br />
        <input
          type="color"
          id="f_color"
          value={props.meme.color}
          onChange={(evt) => {
            console.log(evt.target.value);
            props.onValueChange({
              ...props.meme,
              color: evt.target.value,
            });
          }}
        />
        <div className={style.half}>
          <div>
            <label htmlFor="f_sz">font-size:</label>
            <br />
            <input
              type="number"
              className={style.smallInput}
              min={0}
              value={props.meme.fontSize}
              onChange={(evt) => {
                console.log(evt.target.value);
                props.onValueChange({
                  ...props.meme,
                  fontSize: Number(evt.target.value),
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="f_fw">font-weight:</label>
            <br />
            <input
              type="number"
              className={style.smallInput}
              min="100"
              step="100"
              max="900"
              value={props.meme.fontWeight}
              onChange={(evt) => {
                console.log(evt.target.value);
                props.onValueChange({
                  ...props.meme,
                  fontWeight: Number(evt.target.value),
                });
              }}
            />
          </div>
        </div>
        <div className={style.half}>
          <div>
            <label htmlFor="f_underline">underline:</label>
            <br />
            <input
              id="f_underline"
              type="checkbox"
              checked={props.meme.underline}
              onChange={(evt) => {
                console.log(evt.target.checked);
                props.onValueChange({
                  ...props.meme,
                  underline: evt.target.checked,
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="f_italic">italic:</label>
            <br />
            <input
              id="f_italic"
              type="checkbox"
              checked={props.meme.italic}
              onChange={(evt) => {
                console.log(evt.target.checked);
                props.onValueChange({
                  ...props.meme,
                  italic: evt.target.checked,
                });
              }}
            />
          </div>
        </div>
        <hr />
        <div className={style.half}>
          <Button myType="reset" bgColor="tomato">
            Reset
          </Button>
          <Button myType="submit">save</Button>
        </div>
      </form>
    </div>
  );
};
export default MemeForm;
