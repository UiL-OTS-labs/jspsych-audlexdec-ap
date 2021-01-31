# jspsych-audlexdec-ap
Auditory [Lexical Decision](https://en.wikipedia.org/wiki/Lexical_decision_task) Experiment with Auditory Prime (template)

# Generic documentation
Please read the [generic documentation](https://github.com/UiL-OTS-labs/jspsych-uil-template-docs) for some context and scope.

# Task Description
One of the variations of an Auditory Lexical Decision task. In this variation, a trial consists of two connected auditory 'test items', one is an auditory _prime_ word (or non-word), the other a second word (or non-word). The words are presented as a pair. After the second word, the participant is asked to respond --as soon as possible -- with keyboard keys and indicate wether _both_ heard words are real words or not.  

# Output

The data of _all_ (sub) _trial phases_ are logged in the data, but the output data can be filtered after data collection in many ways.
Please read the [general primer on jsPsych's data](https://github.com/UiL-OTS-labs/jspsych-output) if you are new to jsPsych data output.

Essential output for the _'true experimental'_ purpose in this template are:

- Reaction Time (RT) of the keyboard response in the decision phase
- Correctness of the keyboard response in the decision phase

The crucial trial/sub-trial phase (decision phase) output may look similar to this:

```json
	{
		"rt": 1057,
		"stimulus": "./sounds/hot.wav",
		"key_press": 65,
		"condition": "UNRELATED",
		"word": "hot",
		"word_file": "./sounds/hot.wav",
		"prime": "stapler",
		"prime_file": "./sounds/stapler.wav",
		"id": 2,
		"trial_phase": "present_word",
		"useful_data_flag": true,
		"correct_response": 1,
		"trial_type": "audio-keyboard-response",
		"trial_index": 16,
		"time_elapsed": 55755,
		"internal_node_id": "0.0-8.0-2.1",
		"subject": "m1aha7y1",
		"list": "my_one_and_only_list",
		"correct": true,
		"key_chosen_ascii": 65,
		"key_chosen_char": "A",
		"yes_key": "A",
		"no_key": "L"
	},
	//(...)
```

# Getting started (no experiment server set up)

- Make sure you have a functioning internet connection!
- Do this on a desktop PC or a laptop. Do _NOT_ use a mobile device, like a phone or tablet!

The easiest way to test a template _as is_:

1. Download this repository by clicking the green code button above and Download zip.
2. Unzip at a location of your choosing.
3. Inside the folder is a file called index.html, double click it in order to open it
   in a browser.

### Adapting stimuli
- Open the file `stimuli.js` in your plain text editor.
- There is a list, called LIST_1:

```javacript
const LIST_1 = [//...

```
-  This list can be adapted to your own needs, i.e, you can replace values, make the list longer (don't forget to increment the 'id' values for new items!).
- If you need to implement a more complex design, you should read the `stimuli.js` file (and its comment sections) a little better. 
- For an example of a Latin square design, please have a look [here](https://github.com/UiL-OTS-labs/jspsych-spr-mw) for some inspiration. 

In short: you can add additional lists if your experiment requires this, but then you also have to edit some other values in stimuli.js in order for your experiment to work as intended.

## Prepare for the data server setup (only for people affiliated to our lab!)

### Updating access key
In the file `globals.js` is a variable:
```javascript
const ACCESS_KEY = 'zeekretkey';
```
For uploading to the UiL-OTS data server you will need to change this to the access_key that you obtained when your experiment was approved. For elaborate info see `globals.js`.

Good luck!

