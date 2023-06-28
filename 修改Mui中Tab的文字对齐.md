修改Mui中Tab的文字对齐

```html
<Tab
                label={
                  <Typography
                    sx={{
                      cursor: "pointer",
                      "&.MuiTypography-root": {
                        position: "absolute",
                        left: "16px",
                      },
                    }}
                  >
                    Avalanche Fuji
                    <span style={{ color: "#13c1a1" }}> AVAX</span>
                  </Typography>
                }
                onClick={(event) => {
                  event.stopPropagation();
                  handleTabClick(5, "/avalanche");
                }}
                style={{
                  width: "100%",
                  backgroundColor: activeTab === 5 ? "blue" : "transparent",
                  color: activeTab === 5 ? "#fff" : "#000",
                  textAlign: "left",
                  textTransform: "capitalize",
                }}
                value={5}
              />
```

env中的base URL 为http不是https



在发送代币类型请求的时候，API的headers需要新增contenttype