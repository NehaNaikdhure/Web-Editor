import React, { useContext, useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AceEditor from "react-ace";
import "ace-builds/webpack-resolver";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/ext-language_tools";

import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { toast } from 'react-toastify';
import { SettingContext } from '../../context/SettingsContext';
import { css } from '@emotion/react';
import { Button, Card, ToggleButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Javascript } from '@mui/icons-material';
import { ContentDialogBox } from '../../components/dialog_box';
import Examples from './Examples';

type Props = {}
export type EditorConfigType = {
    mode: {
        html: string,
        css: string,
        js: string
    },
    font: number,
    theme: "monokai" | "tomorrow",
    tab: number,
}
export default function EditorPage({ }: Props) {
    const [tabValue, setTabValue] = React.useState('html');
    const [isLoading, setIsLoading] = useState(false)
    const { settings, toggleTheme } = useContext(SettingContext)
    const [htmlCode, setHtmlCode] = useState("")
    const [cssCode, setCssCode] = useState("")
    const [jsCode, setJsCode] = useState("")
    const [finalCode, setFinalCode] = useState("")
    const [isFullScreenPreviewOpen, setIsFullScreenPreviewOpen] = useState(false)
    const [isExamplesOpen, setIsExamplesOpen] = useState(false)

    const [editorConfigs, setEditorConfigs] = useState<EditorConfigType>({
        mode: {
            html: "html",
            css: "css",
            js: "javascript",
        },
        font: 24,
        theme: "monokai",
        tab: 4,
    })



    function handleThemeChangeInEditor() {
        setEditorConfigs((preValue) => {
            return {
                ...preValue,
                theme: settings.themeMode === "dark" ? "monokai" : "tomorrow"
            }
        })
    }
    const handleTabChange = (event: React.SyntheticEvent, newTabValue: string) => {
        setTabValue(newTabValue);
    };
    useEffect(() => {
        handleThemeChangeInEditor()
    }, [settings])

    function getLocalCode() {
        localStorage.getItem("htmlCode") && setHtmlCode(localStorage.getItem("htmlCode") || "")
        localStorage.getItem("cssCode") && setCssCode(localStorage.getItem("cssCode") || "")
        localStorage.getItem("jsCode") && setJsCode(localStorage.getItem("jsCode") || "")
    }

    useEffect(() => {
        getLocalCode()
    }, [])
    function saveCodeLocally() {
        localStorage.setItem("htmlCode", htmlCode)
        localStorage.setItem("cssCode", cssCode)
        localStorage.setItem("jsCode", jsCode)
    }

    useEffect(() => {
        saveCodeLocally()
        setFinalCode(htmlCode + `
        <style>
        ${cssCode}
        </style>
        <script>
        ${jsCode}
        </script>
        `)
    }, [htmlCode, cssCode, jsCode])


    return (
        <div>
            <div style={{
                display: settings.screen === "mobile" ? "flex" : "grid",
                gridTemplateColumns: "1fr 1fr",
                // height:"5vh"
                flexDirection: settings.screen === "mobile" ? "column-reverse" : "row",

            }}>

                <Box sx={{
                    width: '100%',
                }}>
                    <Tabs
                        value={tabValue}
                        onChange={handleTabChange}
                        textColor="primary"
                        indicatorColor="primary"
                        aria-label="primary tabs example"
                    >
                        <Tab value="html" label="HTML" style={{
                            textTransform: "none",
                            padding: 0
                        }} />
                        <Tab value="css" label="CSS" style={{
                            textTransform: "none",
                            padding: 0
                        }} />
                        <Tab value="javascript" label="JavaScript" style={{
                            textTransform: "none",
                            padding: 0
                        }} />
                    </Tabs>
                </Box>

                <div style={{
                    display: "flex",
                    justifyContent: settings.screen !== "mobile" ? "space-between" : "end",
                    alignItems: "center",
                }}>
                    {
                        settings.screen !== "mobile" && <h3>
                            Preview
                        </h3>
                    }

                    <div>

                        <Button onClick={() => setIsExamplesOpen(true)}>
                            Examples
                        </Button>
                        <Button onClick={() => setIsFullScreenPreviewOpen(true)}>
                            <FullscreenIcon />
                        </Button>
                        <ToggleButton
                            style={{ borderRadius: "50px", border: "none" }}
                            value="check"
                            onChange={toggleTheme}
                        >
                            {settings.themeMode === "dark" && <LightModeIcon color={"secondary"} />}
                            {settings.themeMode === "light" && <DarkModeIcon color={"secondary"} />}
                        </ToggleButton>
                    </div>
                </div>



            </div>
            <div style={{
                display: "grid",
                gridTemplateColumns: settings.screen === "mobile" ? "1fr" : "1fr 1fr",
                border: "1px solid black",
            }}>
                <div style={{
                    border: "1px solid black",
                }}>
                    <div style={{
                        minHeight: "90vh",
                    }}>
                        <div style={{
                            display: tabValue === "html" ? "block" : "none",
                        }}>

                            <AceEditor
                                placeholder=".....start writing html here"
                                mode={"html"}
                                theme={editorConfigs.theme}
                                name="HTML-IDE"
                                onChange={(value) => {
                                    setHtmlCode(value)
                                }}
                                fontSize={editorConfigs.font}
                                highlightActiveLine={true}
                                showPrintMargin={false}
                                value={htmlCode}
                                setOptions={{
                                    enableBasicAutocompletion: true,
                                    enableLiveAutocompletion: true,
                                    enableSnippets: true,
                                    showLineNumbers: true,
                                    tabSize: editorConfigs.tab,
                                    wrap: true
                                }}
                                style={{
                                    width: '100%',
                                    border: "1px solid gray",
                                    height: "90vh",
                                }}
                            />

                        </div>
                        <div style={{
                            display: tabValue === "css" ? "block" : "none",
                        }}>

                            <AceEditor
                                placeholder=".....start writing css here"
                                mode={"css"}
                                theme={editorConfigs.theme}
                                name="HTML-IDE"
                                onChange={(value) => {
                                    setCssCode(value)
                                }}
                                fontSize={editorConfigs.font}
                                highlightActiveLine={true}
                                showPrintMargin={false}
                                value={cssCode}
                                setOptions={{
                                    enableBasicAutocompletion: true,
                                    enableLiveAutocompletion: true,
                                    enableSnippets: true,
                                    showLineNumbers: true,
                                    tabSize: editorConfigs.tab,
                                    wrap: true
                                }}
                                style={{
                                    width: '100%',
                                    border: "1px solid gray",
                                    height: "90vh"
                                }} />

                        </div>
                        <div style={{
                            display: tabValue === "javascript" ? "block" : "none",
                        }}>

                            <AceEditor
                                placeholder=".....start writing javascript here"
                                mode={"javascript"}
                                theme={editorConfigs.theme}
                                name="HTML-IDE"
                                onChange={(value) => {
                                    setJsCode(value)
                                }}
                                fontSize={editorConfigs.font}
                                highlightActiveLine={true}
                                showPrintMargin={false}
                                value={jsCode}
                                setOptions={{
                                    enableBasicAutocompletion: true,
                                    enableLiveAutocompletion: true,
                                    enableSnippets: true,
                                    showLineNumbers: true,
                                    tabSize: editorConfigs.tab,
                                    wrap: true
                                }}
                                style={{
                                    width: '100%',
                                    border: "1px solid gray",
                                    height: "90vh"
                                }} />

                        </div>
                    </div>
                </div>







                <div>

                    <div style={{
                    }}>
                        <Preview code={finalCode} />

                    </div>

                </div>
            </div>

            <ContentDialogBox
                isOpen={isFullScreenPreviewOpen}
                onClose={() => setIsFullScreenPreviewOpen(false)}
                title="Full Screen Preview"
                content={<Preview code={finalCode} />}
                fullScreen
            />
            <ContentDialogBox
                isOpen={isExamplesOpen}
                onClose={() => setIsExamplesOpen(false)}
                title="Examples"
                content={
                    <>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            flexWrap: "wrap"
                        }}>

                            {
                                Examples.map((example, index) => {
                                    return <Card key={index} style={{ margin: "10px", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", width: "min-content", padding: 10 }}>
                                        <div style={{
                                            border: "1px solid #00000025",
                                        }}>
                                            <Preview code={example.html + `<style>${example.css}</style><script>${example.javascript}</script>`} width='200px' height='200px' />

                                        </div>

                                        <h3 style={{
                                            padding: 10
                                        }}>{example.name}</h3>
                                        <div>
                                            <Button onClick={() => {
                                                setHtmlCode(example.html)
                                                setCssCode(example.css)
                                                setJsCode(example.javascript)
                                                setTabValue("html")
                                                setIsExamplesOpen(false)
                                            }} variant="contained">Try It</Button>
                                        </div>


                                    </Card>
                                })
                            }


                        </div>
                    </>
                }
            />

            <div className="col-lg-12 col-12" style={{
                position: "fixed",
                bottom: 0,
                right: 0,
                zIndex:999999,
                border:"1px solid gray",
                padding:"2px 10px"
            }}>
                <p className="copyright-text text-center">Creator: <a rel="nofollow"
                    href="https://www.linkedin.com/in/neha-naikdhure/">Neha Naikdhure</a></p>
            </div>
        </div>
    )
}



function Preview({ code, width, height }: { code: string, width?: string, height?: string }) {
    return (
        <div style={{
            position: "relative",
            overflow: "hidden",
            // display:"flex",
            // justifyContent:"center",
            // alignItems:"center",
            width: width || "100%",
            height: height || "90vh",
            background: "#ffffff",
        }}>
            <iframe
                srcDoc={code}
                title="Preview"
                sandbox="allow-scripts"

                width={"100%"}
                height={"100%"}
            />
        </div>
    );
}